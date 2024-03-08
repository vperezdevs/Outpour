import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomNavBar from "./BottomNavBar";
import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./styles"; // Ensure you have the correct path to your styles

// Assuming you have a placeholder image in your assets folder
const placeholderProfilePic = require("./assets/ProfilePicturePlaceholder.png");

const menuItems = [
  { name: "My Business", image: require("./assets/MyBusiness.png") },
  { name: "Favorites", image: require("./assets/Favorites.png") },
  { name: "Alerts", image: require("./assets/UserAlerts.png") },
  { name: "Friends", image: require("./assets/Friends.png") },
  { name: "Reviews", image: require("./assets/UserReviews.png") },
  { name: "Settings", image: require("./assets/Settings.png") },
];

const Profile = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          console.log("No user document found!");
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handleLinkPress = (linkName) => {
    // Logic to navigate to different screens based on the linkName
    if (linkName === "Reviews") {
      navigation.navigate("UserReviews");
    } else if (linkName === "Alerts") {
      navigation.navigate("UserAlerts");
    } else if (linkName === "Favorites") {
      navigation.navigate("Favorites");
    } else if (linkName === "My Business") {
      navigation.navigate("UserBusiness");
    } else if (linkName === "Friends") {
      navigation.navigate("Friends");
    } else if (linkName === "Settings") {
      navigation.navigate("Settings");
    }
  };

  const handleEditProfilePress = () => {
    navigation.navigate("EditProfile");
  };

  // Determine the source for the profile picture
  const profilePictureSource = userInfo?.userProfilePic ? { uri: userInfo.userProfilePic } : placeholderProfilePic;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView2}>
        {userInfo ? (
          <>
            <Text style={styles.title}>{userInfo.userName}</Text>
            <Text style={styles.title}>{userInfo.name}</Text>
            <Text style={styles.title}>{userInfo.country}</Text>
            <Image
              style={styles.profilePicture}
              source={profilePictureSource}
            />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.editProfileButton}>
          <TouchableOpacity
            style={styles.button_blue}
            onPress={handleEditProfilePress}
          >
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linksContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.linkItem}
              onPress={() => handleLinkPress(item.name)}
            >
              <Image source={item.image} style={styles.iconStyle} />
              <Text style={styles.linkText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default Profile;


/*Julian's Notes

-UPDATED "Edit Profile" button
-UPDATED "linkItem" & "linkContainer" style calls (alignment)
-ADDED glow to list icons (border style calls under "iconPlaceholder")
*/
