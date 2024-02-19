//basic expo/react native project setup
import React from "react";
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
import EditProfile from "./EditProfile";
import styles from "./styles";

const menuItems = [
  { name: "My Business", image: require("./assets/MyBusiness.png") },
  { name: "Favorites", image: require("./assets/Favorites.png") },
  { name: "Alerts", image: require("./assets/UserAlerts.png") },
  { name: "Friends", image: require("./assets/Friends.png") },
  { name: "Reviews", image: require("./assets/UserReviews.png") },
  { name: "Settings", image: require("./assets/Settings.png") },
];

const Profile = ({ navigation }) => {
  const handleLinkPress = (linkName) => {
    console.log(`Link ${linkName} was pressed!`); // Replace with your actual navigation or other actions
    if (linkName === "Reviews") {
      navigation.navigate("UserReviews"); // Navigate to UserReviews when "Reviews" is clicked
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView2}>
        <Text style={styles.title}>John Doe</Text>
        <Image
          style={styles.profilePicture}
          source={require("./assets/Profile Picture Persona.png")}
        />
        <View style={styles.editProfileButton}>
          <TouchableOpacity
            style={styles.button_blue}
            color="#CADBFC"
            accessibilityLabel="Customize Profile"
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
