import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import Slider from "@react-native-community/slider";
import PageTitle from "./PageTitle";

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
      rating: 4.5,
    },
    {
      id: 2,
      userName: "Jane Smith",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Feb 1, 2024",
      reviewContent:
        "Their 2-for-1 nights are the best deal in town. What a steal!",
      rating: 4,
    },
    {
      id: 3,
      userName: "Hugh Man",
      userProfilePic: "./assets/Profile Picture Persona.png",
      reviewDate: "Dec 28, 2023",
      reviewContent: "If I get hammered, you get a 5.",
      rating: 5,
    },
    //more reviews
  ];

  const [activeSection, setActiveSection] = useState("reviews");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <View style={styles.container}>
      {/* Back link */}
      <View style={styles.pageTitleContainer}>
            <PageTitle title="My Business" showBackButton={true} backgroundColor="#EB9F05" navigation={navigation} />
        </View>

      <ScrollView style={styles.container}>
        {/* Banner Image */}
        <Image
          source={{ uri: businessDetails.bannerImage }}
          style={styles.bannerImage}
        />

        {/* Business Details */}
        <View style={styles.businessDetailsContainer}>
          <View style={styles.businessInfo}>
            <Text style={styles.businessName}>{businessDetails.name}</Text>
            <Text style={styles.businessAddress}>
              {businessDetails.address}
            </Text>
          </View>
          <TouchableOpacity
                    style={styles.editBusinessButton}
                    onPress={() => navigation.navigate('EditUserBusiness')}
                    >
                    <Text style={styles.editBusinessButtonText}>Edit</Text>
                </TouchableOpacity>
        </View>

        {/* Map Placeholder */}
        <TouchableOpacity style={styles.mapPlaceholder}>
          <Image
            source={{ uri: businessDetails.mapImage }}
            style={styles.mapImage}
          />
          <View style={styles.overlay} />
          <Text style={styles.mapText}>Map</Text>
        </TouchableOpacity>

        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => handleNavClick("rating")}>
            <Text style={styles.navBarItem}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavClick("reviews")}>
            <Text style={styles.navBarItem}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavClick("rate")}>
            <Text style={styles.navBarItem}>Rate</Text>
          </TouchableOpacity>
        </View>

        {activeSection === "rating" && (
          <View style={styles.sliderContainer}>
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={5}
              />
            </View>
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={3}
              />
            </View>
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={4}
              />
            </View>
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#0057FF"
                maximumTrackTintColor="#FA2222"
                thumbTintColor="#FFFFFF"
                step={0.5}
                value={2}
              />
            </View>
            <View style={styles.ratingTextBox}>
              <Text style={styles.ratingText}>
                Users rate this bar highly for its drinks and customer service.
              </Text>
            </View>
          </View>
        )}

        {activeSection === "reviews" && (
          <View>
            {reviews.map((review) => (
              <View key={review.id} style={styles.reviewBox}>
                <View style={styles.reviewHeader}>
                  <Image
                    source={{ uri: review.userProfilePic }}
                    style={styles.userProfilePic}
                  />
                  <View>
                    <Text style={styles.userName}>{review.userName}</Text>
                    <Text style={styles.reviewDate}>{review.reviewDate}</Text>
                  </View>
                </View>
                <Text style={styles.reviewContent}>{review.reviewContent}</Text>
                <View style={styles.iconSliderContainer}>
                  <View style={styles.iconPlaceholder} />
                  <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    minimumTrackTintColor="#0057FF"
                    maximumTrackTintColor="#FA2222"
                    thumbTintColor="#FFFFFF"
                    step={0.5}
                    value={5}
                  />
                </View>
                <View style={styles.iconSliderContainer}>
                  <View style={styles.iconPlaceholder} />
                  <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    minimumTrackTintColor="#0057FF"
                    maximumTrackTintColor="#FA2222"
                    thumbTintColor="#FFFFFF"
                    step={0.5}
                    value={3}
                  />
                </View>
                <View style={styles.iconSliderContainer}>
                  <View style={styles.iconPlaceholder} />
                  <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={5}
                    minimumTrackTintColor="#0057FF"
                    maximumTrackTintColor="#FA2222"
                    thumbTintColor="#FFFFFF"
                    step={0.5}
                    value={4}
                  />
                </View>
                <View style={styles.iconSliderContainer}>
                  <View style={styles.iconPlaceholder} />
                  <Slider
                    style={styles.slider}
                    thumbTintColor="white"
                    minimumValue={1}
                    maximumValue={5}
                    minimumTrackTintColor="#0057FF"
                    maximumTrackTintColor="#FA2222"
                    step={0.5}
                    value={2}
                  />
                </View>
              </View>
            ))}
          </View>
        )}
        {activeSection === "rate" && (
          <View>
            <TextInput
              style={styles.rateInput}
              placeholder="Write your review..."
            />

            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <View stle={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
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
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <View stle={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
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
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <View stle={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
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
            <View style={styles.iconSliderContainer}>
              <View style={styles.iconPlaceholder} />
              <View stle={styles.sliderContainer}>
                <Slider
                  style={styles.slider}
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
              style={styles.submitButton}
              onPress={() => {
                /* Submit action here */
              }}
            >
              Submit
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "#ffffff",
  },
  backLinkText: {
    padding: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },
  bannerImage: {
    width: '100%',
    height: 200, // for 30% of the viewport height, adjust the multiplier as needed
    alignSelf: 'center', // Center the image
    // ... other styles ...
  },
  businessDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // Add more styles as needed
  },
  ratingText: {
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "150%",
  },
  ratingTextBox: {
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15,
    margin: "5%",
    padding: "2%",
  },
  sliderContainer: {
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  slider: {
    width: 300,
    height: 40,
  },
  businessInfo: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessName: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ffffff",
    // Add more styles as needed
  },
  businessAddress: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessRating: {
    // Add more styles as needed
    color: "#ffffff",
  },
  editBusinessButton: {
    marginLeft: 10,
    backgroundColor: '#0057FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20
},
editBusinessButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
},
  mapPlaceholder: {
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    margin: 10,
    // Add more styles as needed
  },
  mapImage: {
    width: "100%",
    height: 200,
    // Add more styles as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Make the overlay fill the entire container
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark color with 50% opacity
  },
  mapText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -10 }], // Adjust based on your text length
    color: "#fff",
    fontWeight: "bold",
    // Add more styles as needed
  },
  navBar: {
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
  navBarItem: {
    padding: 10,
    fontSize: "135%",
    // Add more styles as needed
  },
  reviewBox: {
    padding: 20,
    margin: 15,
    color: "#ffffff",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#AAC6FD",
    backgroundColor: "#242424",
  },
  reviewHeader: {
    flexDirection: "row",
    color: "#ffffff",
  },
  userProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: "140%",
  },
  reviewDate: {
    color: "#ffffff",
    fontSize: "110%",
  },
  reviewContent: {
    color: "#ffffff",
    paddingBottom: "5%",
    fontSize: "130%",
  },
  reviewRating: {
    color: "#ffffff",
  },
  rateInput: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#AAC6FD",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    color: "black",
    margin: 15,
  },
  submitButton: {
    alignSelf: "center",
    fontFamily: "sans-serif",
    fontSize: "150%",
    fontWeight: "600",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#FF8A8A",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
    width: "auto",
  },
  submitButtonText: {
    color: "white", // Adjust color as needed
    fontSize: 16,
    fontWeight: "bold",
  },
  iconPlaceholder: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: "white", // Placeholder color
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  iconSliderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10,
  },
});

export default BusinessPage;

/*Julian's Notes
-ADDED additional reviews to "Reviews" and sliders to "Rating"
-ADDED in-line icons to "Rating" and "Reviews" sliders (see "iconSliderContainer")
-ADDED styling to "reviewBox"
-ADDED sliders to "Rate" section
-UPDATED "submitButton" and "rateInput" style call
-UPDATED small nav bar styling
-UPDATED "Ratings" tab styling
-CHANGED "reviewText" to "ratingText" (it appears on the "Rating" page)
*/