import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import BottomNavBar from "./BottomNavBar";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./firebase";
import styles from "./styles";

const Home = ({ navigation }) => {
  const [businesses, setBusinesses] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const querySnapshot = await getDocs(collection(db, "businesses"));
      const businessesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBusinesses(businessesData);
    };

    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
    };

    fetchBusinesses();
    fetchReviews();
  }, []);

  const bannerImageUrl = 'https://firebasestorage.googleapis.com/v0/b/outpour-4a343.appspot.com/o/ads%2FHome_Banner1.png?alt=media&token=b21d0f6b-aa44-4811-a9d9-fbdcd2da18ed';
  return (
    <View style={styles.container}>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={true}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={styles.box}>
              <Image
                source={{ uri: bannerImageUrl }}
                style={styles.imageStyle}
                resizeMode="stretch"
              />
            </View>
          ))}
        </ScrollView>

      <View style={styles.recommendedHeader}>
        <Text style={styles.recommendedText}>Recommended for you</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ViewAll")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
      >
        {businesses.slice(0,6).map((business) => (
          <TouchableOpacity
            key={business.id}
            style={styles.businessBox}
            onPress={() => navigation.navigate("BusinessPage", { businessId: business.id })}
          >
            <Image
              source={{ uri: business.imageUrl }}
              style={styles.businessImage}
            />
            <Text style={styles.businessName}>{business.name}</Text>
            <Text style={styles.businessLocation}>{business.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.reviewsHeader}>
        <Text style={styles.reviewsHeaderText}>Your friends are saying:</Text>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
      >
        {reviews.map((review) => (
          <TouchableOpacity
            key={review.id}
            onPress={() => navigation.navigate("BusinessPage", { reviewId: review.id })}
          >
            <View style={styles.reviewBox}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewUser}>
                  <Image
                    source={{ uri: review.userProfilePic }}
                    style={styles.userProfilePic}
                  />
                  <Text style={styles.userName}>{review.userName}</Text>
                </View>
                <Text style={styles.reviewDate}>{review.reviewDate}</Text>
              </View>
              <Text style={styles.reviewContent}>{review.reviewContent}</Text>
              <Text style={styles.reviewLocation}>{review.reviewLocation}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNavBar activeLink="Home" navigation={navigation} />
    </View>
  );
};

export default Home;

