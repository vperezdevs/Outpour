import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';
import Slider from '@react-native-community/slider';

const screenWidth = Dimensions.get('window').width

const UserReviews = ({navigation}) => {
  // Placeholder data for the reviews
  const reviews = [
    { id: '1', establishment: 'Tori Tori', rating: 4 },
    { id: '2', establishment: 'Wills Pub', rating: 3 },
    // Add more reviews as needed
  ];
  // Render each individual review item
  const ReviewItem = ({ review }) => {
    return (
      <View style={styles.reviewItem}>
        <View style={styles.reviewContent}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
          step={0.5}
          value={5}
          />
          <Text style={styles.establishmentName}>Placeholder text for a user's review!</Text>
          <Text style={styles.establishmentName}>{review.establishment}</Text>
        </View>
        <TouchableOpacity style={styles.changeRatingButton}>
          <Text>Change Rating</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render the list of reviews
  return (
    <View style={styles.container}>
      <PageTitle 
        title="User Reviews"
        showBackButton={true}
        backgroundColor="#BE4621"
        navigation={navigation}
      />
      <FlatList
        style={{ flex: 1 }}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={item => item.id}
      />
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // This pushes the BottomNavBar to the bottom
    backgroundColor: '#1E1E1E',
  },
    reviewItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      paddingBottom: 30,
      paddingLeft: 20,
      marginTop: 10
    },
    reviewContent: {
      flex: 1,
    },
    establishmentName: {
      fontSize: 16,
      color: 'white', 
      marginBottom: 4, 
    },
    reviewText: {
      fontSize: 12, 
      color: 'grey',
      marginBottom: 10, 
    },
  changeRatingButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default UserReviews;