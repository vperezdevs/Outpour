import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import PageTitle from "./PageTitle";
import BottomNavBar from "./BottomNavBar";
import Slider from "@react-native-community/slider";
import styles from "./styles";

const screenWidth = Dimensions.get("window").width;

const UserReviews = ({ navigation }) => {
  // Placeholder data for the reviews
  const reviews = [
    { id: "1", establishment: "Tori Tori", rating: 4 },
    { id: "2", establishment: "Wills Pub", rating: 3 },
    // Add more reviews as needed
  ];
  // Render each individual review item
  const ReviewItem = ({ review }) => {
    return (
      <View style={styles.reviewItemUR}>
        <View style={styles.reviewContentUR}>
          <View style={styles.iconSliderContainerUR}>
            <View style={styles.iconPlaceholderUR} />
            <Slider
              style={styles.sliderUR}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={5}
            />
          </View>
          <View style={styles.iconSliderContainerUR}>
            <View style={styles.iconPlaceholderUR} />
            <Slider
              style={styles.sliderUR}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={3}
            />
          </View>
          <View style={styles.iconSliderContainerUR}>
            <View style={styles.iconPlaceholderUR} />
            <Slider
              style={styles.sliderUR}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={4}
            />
          </View>
          <View style={styles.iconSliderContainerUR}>
            <View style={styles.iconPlaceholderUR} />
            <Slider
              style={styles.sliderUR}
              thumbTintColor="white"
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              step={0.5}
              value={2}
            />
          </View>
          <Text style={styles.establishmentNameUR}>
            Placeholder text for a user's review!
          </Text>
          <Text style={styles.establishmentNameUR}>{review.establishment}</Text>
        </View>
        <TouchableOpacity style={styles.changeRatingButtonUR}>
          <Text style={styles.changeRatingButtonTextUR}>Change Rating</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render the list of reviews
  return (
    <SafeAreaView style={styles.containerUR}>
      <PageTitle
        title="User Reviews"
        showBackButton={true}
        backgroundColor="#BE4621"
        navigation={navigation}
      />
      <FlatList
        style={{ flex: 1 }} // Add flex: 1 here
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default UserReviews;

//make changerating do stuff
//make bar 1 and bar 2 clickable

/*Notes
-ADDED sliders to UserReviews
*/
