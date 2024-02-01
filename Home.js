import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text, StatusBar } from 'react-native';
import BottomNavBar from './BottomNavBar';
import BusinessPage from './BusinessPage';
import { NavigationContainer } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const localBusinesses = [
        // Add your local businesses data here. Example:
        { id: 1, name: 'Business 1', location: 'Location 1', imageUrl: './assets/Home_Recommended_1.png' },
        { id: 2, name: 'Business 2', location: 'Location 2', imageUrl: './assets/Cover_WillsPub.png' },
        // ... more businesses
    ];
    const reviews = [
      {
          id: 1,
          userName: 'John Doe',
          userProfilePic: './assets/Profile Picture Persona.png',
          reviewDate: 'Jan 20, 2024',
          reviewContent: 'Great place, loved the ambiance!'
      },
      {
        id: 2,
        userName: 'Joana Summit',
        userProfilePic: './assets/friend1.jpg',
        reviewDate: 'Jan 22, 2024',
        reviewContent: 'Pretty solid place, even better atmosphere!'
      },
      //more reviews
  ];
    return (
      <View style = {styles.container}>
        <>
            <ScrollView 
                horizontal={true} 
                style={styles.scrollView}
                showsHorizontalScrollIndicator={true}
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <View key={index} style={styles.box}>
                        <Image 
                        source={require('./assets/Home_Banner1.png')} // Adjust the path to where your image is located
                        style={styles.imageStyle} // Style your image
                        resizeMode="stretch"
                        />
                    </View>
                ))}
            </ScrollView>

            {/* Header for Recommended section */}
            <View style={styles.recommendedHeader}>
                <Text style={styles.recommendedText}>Recommended for you</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* ScrollView for local businesses */}
            <ScrollView 
                horizontal={true} 
                style={styles.scrollView}
                showsHorizontalScrollIndicator={true}
            >
                    {localBusinesses.map((business) => (
                    <TouchableOpacity 
                        key={business.id} 
                        style={styles.businessBox}
                        onPress={() => navigation.navigate("BusinessPage")} // Navigate to BusinessPage with params
                    >
                        <Image source={{ uri: business.imageUrl }} style={styles.businessImage} />
                        <Text style={styles.businessName}>{business.name}</Text>
                        <Text style={styles.businessLocation}>{business.location}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
              {/* Header for Reviews section */}
              <View style={styles.reviewsHeader}>
                <Text style={styles.reviewsHeaderText}>Your friends are saying:</Text>
            </View>

            {/* ScrollView for reviews */}
            <ScrollView 
                horizontal={true} 
                style={styles.scrollView}
                showsHorizontalScrollIndicator={true}
            >
                {reviews.map((review) => (
                    <View key={review.id} style={styles.reviewBox}>
                        <View style={styles.reviewHeader}>
                            <View style={styles.reviewUser}>
                                <Image source={{ uri: review.userProfilePic }} style={styles.userProfilePic} />
                                <Text style={styles.userName}>{review.userName}</Text>
                            </View>
                            <Text style={styles.reviewDate}>{review.reviewDate}</Text>
                        </View>
                        <Text style={styles.reviewContent}>{review.reviewContent}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
        <BottomNavBar activeLink="Home" navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E'
    },
    scrollView: {
      flexGrow: 0,
      backgroundColor: '#1E1E1E'
    },
    box: {
        width: 400,
        height: 150,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recommendedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 10
    },
    recommendedText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fcfdff",
    },
    viewAllText: {
        fontSize: 16,
        color: 'red',
    },
    businessBox: {
        width: 200, // Set as needed
        height: 250, // Set as needed
        backgroundColor: '#1E1E1E', // Example color
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10, // Add space between items
    },
    businessImage: {
        width: 180, // Set as needed
        height: 180, // Set as needed
        backgroundColor: 'skyblue',
    },
    businessName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        color: "#fcfdff",
    },
    businessLocation: {
        fontSize: 14,
        color: 'grey',
        marginTop: 2,
    },
    reviewsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 50,
      paddingHorizontal: 10
    },
    reviewsHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fcfdff",
    },
    reviewBox: {
        width: 300, // Set as needed
        backgroundColor: "#fcfdff",
        borderRadius: 8, // Optional: for rounded corners
        padding: 10, // Internal padding
        margin: 20, // Space between items
        // ... more styling
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    reviewUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfilePic: {
        width: 40,
        height: 40,
        borderRadius: 20, // Makes the image round
        marginRight: 8,
        backgroundColor: 'skyblue',
    },
    userName: {
        fontWeight: 'bold',
    },
    reviewDate: {
        fontSize: 12,
        color: 'grey',
    },
    reviewContent: {
        fontSize: 14,
        // ... more styling
  },
  BottomNavBar: {
    paddingTop: 75,
  },
  imageStyle: {
    width: '100%',
    height: 200, 
  },
});

export default Home;
