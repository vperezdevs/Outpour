import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { db, auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./styles";
import BottomNavBar from "./BottomNavBar";

//For some reason expo image picker hates firebase so for now this just works in frontend. Fun! 

const placeholderProfilePic = require("./assets/ProfilePicturePlaceholder.png");

const menuItems = [
  { name: "Favorites", image: require("./assets/Favorites.png") },
  { name: "Alerts", image: require("./assets/UserAlerts.png") },
  { name: "Friends", image: require("./assets/Friends.png") },
  { name: "Reviews", image: require("./assets/UserReviews.png") },
  { name: "Settings", image: require("./assets/Settings.png") },
];

const Profile = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState(null);
  // New state variable for holding the selected image URI
  const [selectedImageUri, setSelectedImageUri] = useState(null);

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

    if (linkName === "Reviews") {
      navigation.navigate("UserReviews");
    } else if (linkName === "Alerts") {
      navigation.navigate("UserAlerts");
    } else if (linkName === "Favorites") {
      navigation.navigate("Favorites");
    } else if (linkName === "Friends") {
      navigation.navigate("Friends");
    } else if (linkName === "Settings") {
      navigation.navigate("Settings");
    }
  };

  const handleEditProfilePress = () => {
    navigation.navigate("EditProfile");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  // Determine the source for the profile picture
  const profilePictureSource = selectedImageUri
    ? { uri: selectedImageUri }
    : userInfo?.userProfilePic
    ? { uri: userInfo.userProfilePic }
    : placeholderProfilePic;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView2}>
        {userInfo ? (
          <>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Image style={styles.profilePicture} source={profilePictureSource} />
            <Text style={styles.title}>{userInfo.userName}</Text>
            <Text style={styles.title}>{userInfo.name}</Text>
            <Text style={styles.title}>{userInfo.country}</Text>
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
