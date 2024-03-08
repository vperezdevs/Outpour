import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { db, auth } from './firebase';
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';
import Slider from '@react-native-community/slider';
import styles from './styles';

const UserReviews = ({ navigation }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const user = auth.currentUser;
      if (!user) return;
      
      const q = query(collection(db, 'reviews'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      const fetchedReviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, []);

  const navigateToBusinessPage = (businessId) => {
    navigation.navigate('BusinessPage', { businessId });
  };

  const confirmDeleteReview = (reviewId) => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => deleteReview(reviewId),
          style: "destructive"
        }
      ]
    );
  };

  const deleteReview = async (reviewId) => {
    await deleteDoc(doc(db, "reviews", reviewId));
    setReviews(reviews.filter(review => review.id !== reviewId));
  };


  const ReviewItem = ({ review }) => {
    return (
      <View style={styles.reviewItemUR}>
        <View style={styles.reviewContentUR}>
          {/* Dynamically render sliders based on review ratings */}
          {[review.rating1, review.rating2, review.rating3, review.rating4].map((rating, index) => (
            <View key={index} style={styles.iconSliderContainerUR}>
              <Slider
                style={styles.sliderUR}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={rating}
                disabled={true} // Disable slider interaction
              />
            </View>
          ))}
          <Text style={styles.establishmentNameUR}>{review.reviewContent}</Text>
          <Text style={styles.establishmentNameUR}>{review.reviewLocation}</Text>
        </View>
        <TouchableOpacity style={styles.changeRatingButtonUR} onPress={() => confirmDeleteReview(review.id)}>
          <Text style={styles.changeRatingButtonTextUR}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.containerUR}>
      <PageTitle title="User Reviews" showBackButton={true} backgroundColor="#BE4621" navigation={navigation} />
      <FlatList
        style={{ flex: 1 }}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default UserReviews;
