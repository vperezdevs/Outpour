import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from "react-native";
import BottomNavBar from "./BottomNavBar";
import BusinessPage from "./BusinessPage";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles";

const Home = ({ navigation }) => {
  const localBusinesses = [
    // Add local businesses data here
    {
      id: 1,
      name: "Business 1",
      location: "Location 1",
      imageUrl: "./assets/Home_Recommended_1.png",
    },
    {
      id: 2,
      name: "Business 2",
      location: "Location 2",
      imageUrl: "./assets/Cover_WillsPub.png",
    },
    // ... more businesses
  ];
  const reviews = [
    {
      id: 1,
      userName: "John Doe",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Jan 20, 2024",
      reviewContent: "Great place, loved the ambiance!",
      reviewLocation: "Wally`s Liquors",
    },
    {
      id: 2,
      userName: "Joana Summit",
      userProfilePic: "./assets/friend1.jpg",
      reviewDate: "Jan 22, 2024",
      reviewContent: "Pretty solid place, even better atmosphere!",
      reviewLocation: "Tori Tori",
    },
    //more reviews
  ];
  return (
    <View style={styles.container}>
      <>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={true}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={styles.box}>
              <Image
                source={require("./assets/Home_Banner1.png")}
                style={styles.imageStyle}
                resizeMode="stretch"
              />
            </View>
          ))}
        </ScrollView>

        {/* Header for Recommended section */}
        <View style={styles.recommendedHeader}>
          <Text style={styles.recommendedText}>Recommended for you</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ViewAll")}>
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
              onPress={() => navigation.navigate("BusinessPage")}
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
            <TouchableOpacity
              onPress={() => navigation.navigate("BusinessPage")}
            >
              <View key={review.id} style={styles.reviewBox}>
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
                <Text style={styles.reviewLocation}>
                  {review.reviewLocation}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </>
      <BottomNavBar activeLink="Home" navigation={navigation} />
    </View>
  );
};

export default Home;
