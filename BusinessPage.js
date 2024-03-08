import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  TextInput, // Add this line
} from "react-native";
import Slider from "@react-native-community/slider";
import { db, auth } from "./firebase";
import { doc, getDoc, collection, query, where, getDocs, updateDoc, arrayUnion, arrayRemove, addDoc } from "firebase/firestore";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const placeholderProfilePic = require('./assets/ProfilePicturePlaceholder.png');

const BusinessPage = ({ route, navigation }) => {
  const { businessId } = route.params;
  const [businessDetails, setBusinessDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeSection, setActiveSection] = useState("reviews");
  const [isFavorite, setIsFavorite] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(1);
  const [rating3, setRating3] = useState(1);
  const [rating4, setRating4] = useState(1);

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
  
          const q = query(collection(db, "reviews"), where("businessId", "==", businessId));
          const querySnapshot = await getDocs(q);
  
          // Enhanced reviews with date conversion
          const enhancedReviews = querySnapshot.docs.map(doc => {
            const reviewData = doc.data();
  
            // Convert the Firestore timestamp to a JavaScript Date object then to a string
            const reviewDate = reviewData.reviewDate ? reviewData.reviewDate.toDate().toLocaleString() : 'No date specified';
  
            return {
              id: doc.id,
              ...reviewData,
              reviewDate, // Now a string that can be safely rendered
            };
          });
  
          setReviews(enhancedReviews);
        } else {
          console.log("No such business!");
        }
  
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists() && userSnap.data().favorites?.includes(businessId)) {
            setIsFavorite(true);
          }
        }
      }
    };
  
    fetchBusinessDataAndReviews();
  }, [businessId]);

  const handleNavClick = (section) => setActiveSection(section);

  const toggleFavorite = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    if (isFavorite) {
      await updateDoc(userRef, { favorites: arrayRemove(businessId) });
    } else {
      await updateDoc(userRef, { favorites: arrayUnion(businessId) });
    }
    setIsFavorite(!isFavorite);
  };

  const submitReview = async () => {
    if (!auth.currentUser) {
      console.log("User not logged in");
      return;
    }
  
    // Fetch the user's profile document from Firestore
    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnap = await getDoc(userRef);
    let userProfilePic = userSnap.exists() ? userSnap.data().userProfilePic : null;
  
    if (!userSnap.exists()) {
      console.log("No such user!");
      return;
    }
  
    // Extract userName from the user's profile document
    const userName = userSnap.data().userName; // Adjust according to your database schema
  
    const review = {
      businessId: businessDetails.id,
      reviewContent: reviewText,
      rating1,
      rating2,
      rating3,
      rating4,
      reviewLocation: businessDetails.name,
      reviewDate: new Date(), // Consider using Firebase server timestamp
      userId: auth.currentUser.uid,
      userName,
      userProfilePic // Include the userName in the review
    };
  
    try {
      const reviewsRef = collection(db, "reviews");
      await addDoc(reviewsRef, review);
      console.log("Review submitted successfully");
      // Update the state or UI accordingly
    } catch (error) {
      console.error("Error submitting review: ", error);
    }
  };
  
  return (
    <View style={styles.containerBis}>
      <TouchableOpacity style={styles.backLinkBis} onPress={() => navigation.goBack()}>
        <Text style={styles.backLinkTextBis}>Back</Text>
      </TouchableOpacity>

      <ScrollView style={styles.containerBis}>
        {businessDetails && (
          <>
            <Image source={{ uri: businessDetails.bannerImage }} style={styles.bannerImageBis} />
            <View style={styles.businessDetailsContainerBis}>
              <Text style={styles.businessNameBis}>{businessDetails.name}</Text>
              <Text style={styles.businessAddressBis}>{businessDetails.address}</Text>
              <TouchableOpacity onPress={toggleFavorite} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
                <Icon name={isFavorite ? "heart" : "heart-o"} size={24} color="red" />
              </TouchableOpacity>
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
                No data for rating aggregation currently available!
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
                <Image
                source={{ uri: review.userProfilePic || placeholderProfilePic }}
                style={styles.userProfilePicBis}
              />
            <View>
              <Text style={styles.userNameBis}>{review.userName}</Text>
              {review.reviewDate ? (
                <Text style={styles.reviewDateBis}>{review.reviewDate.toString()}</Text>
              ) : null}
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
            {/* Slider 3 */}
            <Slider
              style={styles.sliderBis}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={review.rating3 || 0} // Use review.rating2 or default to 0 if undefined
        />
            {/* Slider 4 */}
            <Slider
              style={styles.sliderBis}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#0057FF"
              maximumTrackTintColor="#FA2222"
              thumbTintColor="#FFFFFF"
              step={0.5}
              value={review.rating4 || 0} // Use review.rating2 or default to 0 if undefined
        />
        
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
              value={reviewText}
              onChangeText={setReviewText} // Update state on text change
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
                onValueChange={setRating1} // Update state on slider change
                value={rating1}
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
                onValueChange={setRating2} // Update state on slider change
                value={rating2}
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
                  onValueChange={setRating3} // Update state on slider change
                  value={rating3}
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
                  onValueChange={setRating4} // Update state on slider change
                  value={rating4}
                />
              </View>
            </View>
            <TouchableOpacity
            style={styles.submitButtonBis}
            onPress={submitReview} // Attach the submit function here
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