import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const BusinessPage = ({ navigation }) => {
  //Placeholder data
  const businessDetails = {
    name: "Business Name",
    address: "123 Business St, City",
    bannerImage: "./assets/Business_Banner.png",
    mapImage: "./assets/Map_Graphic.png",
  };

  const reviews = [
    {
      id: 1,
      userName: "John Doe",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Jan 20, 2024",
      reviewContent: "Great place, loved the ambiance!",
      rating1: 4.5,
      rating2: 3,
      rating3: 2,
      rating4: 5,
    },
    {
      id: 2,
      userName: "Jane Smith",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Feb 1, 2024",
      reviewContent:
        "Their 2-for-1 nights are the best deal in town. What a steal!",
      rating1: 4,
      rating2: 5,
      rating3: 4,
      rating4: 2,
    },
    {
      id: 3,
      userName: "Hugh Man",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Dec 28, 2023",
      reviewContent: "If I get hammered, you get a 5.",
      rating1: 5,
      rating2: 5,
      rating3: 2,
      rating4: 4,
    },
    //more reviews
  ];

  const [activeSection, setActiveSection] = useState("reviews");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <View style={styles.containerBis}>
      {/* Back link */}
      <TouchableOpacity
        style={styles.backLinkBis}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backLinkTextBis}>Back</Text>
      </TouchableOpacity>

      <ScrollView style={styles.containerBis}>
        {/* Banner Image */}
        <Image
          source={{ uri: businessDetails.bannerImage }}
          style={styles.bannerImageBis}
        />

        {/* Business Details */}
        <View style={styles.businessDetailsContainerBis}>
          <View style={styles.businessInfoBis}>
            <View style={styles.businessNameContainerBis}>
              <Text style={styles.businessNameBis}>{businessDetails.name}</Text>
              <TouchableOpacity
                style={styles.heartIconBis}
                onPress={() => {
                  /* handle heart icon press here */
                }}
              >
                <Icon name="heart" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.businessAddressBis}>
              {businessDetails.address}
            </Text>
          </View>
        </View>

        {/* Map Placeholder */}
        <TouchableOpacity style={styles.mapPlaceholderBis}>
          <Image
            source={{ uri: businessDetails.mapImage }}
            style={styles.mapImageBis}
          />
          <View style={styles.overlayBis} />
          <Text style={styles.mapTextBis}>Map</Text>
        </TouchableOpacity>

        {/* Navigation Bar */}
        <View style={styles.navBarBis}>
          <TouchableOpacity onPress={() => handleNavClick("rating")}>
            <Text style={styles.navBarItemBis}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavClick("reviews")}>
            <Text style={styles.navBarItemBis}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavClick("rate")}>
            <Text style={styles.navBarItemBis}>Rate</Text>
          </TouchableOpacity>
        </View>

        {activeSection === "rating" && (
          <View style={styles.sliderContainerBis}>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <Slider
                style={styles.sliderBis}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={5}
              />
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <Slider
                style={styles.sliderBis}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={3}
              />
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <Slider
                style={styles.sliderBis}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={4}
              />
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <Slider
                style={styles.sliderBis}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={2}
              />
            </View>
            <View style={styles.ratingTextBoxBis}>
              <Text style={styles.ratingTextBis}>
                Users rate this bar highly for its drinks and customer service.
              </Text>
            </View>
          </View>
        )}

        {activeSection === "reviews" && (
          <View>
            {reviews.map((review) => (
              <View key={review.id} style={styles.reviewBoxBis}>
                <View style={styles.reviewHeaderBis}>
                  <Image
                    source={{ uri: review.userProfilePic }}
                    style={styles.userProfilePicBis}
                  />
                  <View>
                    <Text style={styles.userNameBis}>{review.userName}</Text>
                    <Text style={styles.reviewDateBis}>
                      {review.reviewDate}
                    </Text>
                  </View>
                </View>
                <Text style={styles.reviewContentBis}>
                  {review.reviewContent}
                </Text>
                <View style={styles.reviewSlidersBis}>
                  <View style={styles.iconSliderContainerBis}>
                    <View style={styles.iconPlaceholderBis} />
                    <Slider
                      style={styles.sliderBis}
                      minimumValue={1}
                      maximumValue={5}
                      minimumTrackTintColor="#0057FF"
                      maximumTrackTintColor="#FA2222"
                      thumbTintColor="#FFFFFF"
                      step={0.5}
                      value={review.rating1}
                    />
                  </View>
                  <View style={styles.iconSliderContainerBis}>
                    <View style={styles.iconPlaceholderBis} />
                    <Slider
                      style={styles.sliderBis}
                      minimumValue={1}
                      maximumValue={5}
                      minimumTrackTintColor="#0057FF"
                      maximumTrackTintColor="#FA2222"
                      thumbTintColor="#FFFFFF"
                      step={0.5}
                      value={review.rating2}
                    />
                  </View>
                  <View style={styles.iconSliderContainerBis}>
                    <View style={styles.iconPlaceholderBis} />
                    <Slider
                      style={styles.sliderBis}
                      minimumValue={1}
                      maximumValue={5}
                      minimumTrackTintColor="#0057FF"
                      maximumTrackTintColor="#FA2222"
                      thumbTintColor="#FFFFFF"
                      step={0.5}
                      value={review.rating3}
                    />
                  </View>
                  <View style={styles.iconSliderContainerBis}>
                    <View style={styles.iconPlaceholderBis} />
                    <Slider
                      style={styles.sliderBis}
                      thumbTintColor="white"
                      minimumValue={1}
                      maximumValue={5}
                      minimumTrackTintColor="#0057FF"
                      maximumTrackTintColor="#FA2222"
                      step={0.5}
                      value={review.rating4}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
        {activeSection === "rate" && (
          <View>
            <TextInput
              style={styles.rateInputBis}
              placeholder="Write your review..."
            />

            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <View stle={styles.sliderContainerBis}>
                <Slider
                  style={styles.sliderBis}
                  minimumValue={1}
                  maximumValue={5}
                  minimumTrackTintColor="#0057FF"
                  maximumTrackTintColor="#FA2222"
                  thumbTintColor="#FFFFFF"
                  step={0.5}
                  value={4}
                />
              </View>
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <View stle={styles.sliderContainerBis}>
                <Slider
                  style={styles.sliderBis}
                  minimumValue={1}
                  maximumValue={5}
                  minimumTrackTintColor="#0057FF"
                  maximumTrackTintColor="#FA2222"
                  thumbTintColor="#FFFFFF"
                  step={0.5}
                  value={4}
                />
              </View>
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <View stle={styles.sliderContainerBis}>
                <Slider
                  style={styles.sliderBis}
                  minimumValue={1}
                  maximumValue={5}
                  minimumTrackTintColor="#0057FF"
                  maximumTrackTintColor="#FA2222"
                  thumbTintColor="#FFFFFF"
                  step={0.5}
                  value={4}
                />
              </View>
            </View>
            <View style={styles.iconSliderContainerBis}>
              <View style={styles.iconPlaceholderBis} />
              <View stle={styles.sliderContainerBis}>
                <Slider
                  style={styles.sliderBis}
                  minimumValue={1}
                  maximumValue={5}
                  minimumTrackTintColor="#0057FF"
                  maximumTrackTintColor="#FA2222"
                  thumbTintColor="#FFFFFF"
                  step={0.5}
                  value={4}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.submitButtonBis}
              onPress={() => {
                /* Submit action here */
              }}
            >
              <Text style={styles.submitButtonTextBis}> Submit </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

/*
const styles = StyleSheet.create({
  containerBis: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "#ffffff",
  },
  backLinkBis: {
    marginTop: "15%",
    marginLeft: "5%",
    padding: "1%",
    fontWeight: "bold",
  },
  backLinkTextBis: {
    color: "#FF8A8A",
  },
  bannerImageBis: {
    width: "100%",
    height: 200, // for 30% of the viewport height, adjust the multiplier as needed
    alignSelf: "center", // Center the image
    // ... other styles ...
  },
  businessDetailsContainerBis: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // Add more styles as needed
  },
  ratingTextBis: {
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "30%",
  },
  ratingTextBoxBis: {
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15,
    margin: "5%",
    padding: "2%",
  },
  sliderContainerBis: {
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  sliderBis: {
    width: 300,
    height: 40,
  },
  businessInfoBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessNameBis: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ffffff",
    // Add more styles as needed
  },
  businessNameContainerBis: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIconBis: {
    marginLeft: 175, // Space between the business name and the heart icon
    padding: 5, // Padding to make the touch area larger
  },

  businessAddressBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessRatingBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  mapPlaceholderBis: {
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    margin: 10,
    // Add more styles as needed
  },
  mapImageBis: {
    width: "100%",
    height: 200,
    // Add more styles as needed
  },
  overlayBis: {
    ...StyleSheet.absoluteFillObject, // Make the overlay fill the entire container
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark color with 50% opacity
  },
  mapTextBis: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -10 }], // Adjust based on your text length
    color: "#fff",
    fontWeight: "bold",
    // Add more styles as needed
  },
  navBarBis: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    margin: 15,
    borderWidth: 5,
    borderColor: "#FF8A8A",
    borderRadius: 15,
    // Add more styles as needed
  },
  navBarItemBis: {
    padding: 10,
    fontSize: "25%",
    // Add more styles as needed
  },
  reviewBoxBis: {
    padding: 20,
    margin: 15,
    color: "#ffffff",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#AAC6FD",
    backgroundColor: "#242424",
  },
  reviewHeaderBis: {
    flexDirection: "row",
    color: "#ffffff",
  },
  reviewSlidersBis: {
    padding: "5%",
  },
  userProfilePicBis: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userNameBis: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: "30%",
  },
  reviewDateBis: {
    color: "#ffffff",
    fontSize: "15%",
  },
  reviewContentBis: {
    color: "#ffffff",
    paddingBottom: "5%",
    fontSize: "25%",
  },
  reviewRatingBis: {
    color: "#ffffff",
  },
  rateInputBis: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#AAC6FD",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    color: "black",
    margin: 15,
  },
  submitButtonBis: {
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#FF8A8A",
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 15,
    width: "auto",
  },
  submitButtonTextBis: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconPlaceholderBis: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: "white", // Placeholder color
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  iconSliderContainerBis: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10,
  },
});
*/

export default BusinessPage;

/*Julian's Notes 2: iOS Boogaloo
-CHANGED Reviews section to take value for each slider
-FIXED floating string inside of submit button
*/
