import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import Slider from "@react-native-community/slider";
import { db } from "./firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

const BusinessPage = ({ route, navigation }) => {
  const { businessId } = route.params;
  const [businessDetails, setBusinessDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeSection, setActiveSection] = useState("reviews");

  useEffect(() => {
    const fetchBusinessDataAndReviews = async () => {
      if (businessId) {
        const docRef = doc(db, "businesses", businessId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const lat = parseFloat(data.lat);
          const lng = parseFloat(data.lng);
          setBusinessDetails({ id: docSnap.id, ...data, coordinates: { lat, lng } });

          // Ensure you've imported and correctly used the query, where, and getDocs functions
          const reviewsRef = collection(db, "reviews");
          const q = query(reviewsRef, where("businessId", "==", businessId)); // Make sure 'businessId' matches the field name in your Firestore
          const querySnapshot = await getDocs(q);

          const fetchedReviews = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setReviews(fetchedReviews);
        } else {
          console.log("No such business!");
        }
      }
    };
  
    fetchBusinessDataAndReviews();
  }, [businessId]);

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
        {/* Dynamically display banner image and business details */}
        {businessDetails && (
          <>
            <Image
              source={{ uri: businessDetails.bannerImage }}
              style={styles.bannerImageBis}
            />
            <View style={styles.businessDetailsContainerBis}>
              <Text style={styles.businessNameBis}>{businessDetails.name}</Text>
              <Text style={styles.businessAddressBis}>{businessDetails.address}</Text>
            </View>
          </>
        )}

        {/* Replacing Map Placeholder with Google Maps for web */}
        {businessDetails?.coordinates && (
          <MapView
            style={{ height: 200, borderRadius: 20 }}
            initialRegion={{
              latitude: businessDetails.coordinates.lat,
              longitude: businessDetails.coordinates.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: businessDetails.coordinates.lat,
                longitude: businessDetails.coordinates.lng,
              }}
              title={businessDetails.name}
              description={businessDetails.address}
            />
          </MapView>
        )}

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
    {reviews.length > 0 ? (
      reviews.map((review) => (
        <View key={review.id} style={styles.reviewBoxBis}>
          <View style={styles.reviewHeaderBis}>
            <Image source={{ uri: review.userProfilePic }} style={styles.userProfilePicBis} />
            <View>
              <Text style={styles.userNameBis}>{review.userName}</Text>
              <Text style={styles.reviewDateBis}>{review.reviewDate}</Text>
            </View>
          </View>
          <Text style={styles.reviewContentBis}>{review.reviewContent}</Text>
          <View style={styles.reviewSlidersBis}>
            {/* Slider 1 */}
            <Slider
              style={styles.sliderBis}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={review.rating1 || 0} // Use review.rating1 or default to 0 if undefined
            />
            {/* Slider 2 */}
            <Slider
              style={styles.sliderBis}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={review.rating2 || 0} // Use review.rating2 or default to 0 if undefined
            />
            {/* Additional sliders as needed */}
          </View>
        </View>
      ))
    ) : (
      <Text>No reviews available.</Text>
    )}
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
