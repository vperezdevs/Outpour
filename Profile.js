//basic expo/react native project setup
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import BottomNavBar from "./BottomNavBar";
import EditProfile from "./EditProfile";

const menuItems = [
  { name: 'My Business', image: require('./assets/MyBusiness.png') },
  { name: 'Favorites', image: require('./assets/Favorites.png') },
  { name: 'Alerts', image: require('./assets/UserAlerts.png') },
  { name: 'Friends', image: require('./assets/Friends.png') },
  { name: 'Reviews', image: require('./assets/UserReviews.png') },
  { name: 'Settings', image: require('./assets/Settings.png') },
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
      <ScrollView contentContainerStyle={styles.scrollView}>
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
            Edit Profile
          </TouchableOpacity>
        </View>
        <View style={styles.linksContainer}>
  {menuItems.map((item, index) => (
    <TouchableOpacity key={index} style={styles.linkItem} onPress={() => handleLinkPress(item.name)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  scrollView: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 150, // Set your own width
    height: 150, // Set your own height
    borderRadius: 75, // Adjust for roundness
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FF8A8A",
  },
  editProfileButton: {
    marginBottom: 40, // Space between button and links
  },
  linksContainer: {
    width: "40%",
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20%", // Space between items
  },
  iconPlaceholder: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: "white", // Placeholder color
    borderWidth: 3,
    borderColor: "#FF8A8A",
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  linkText: {
    color: "#FFF",
    fontSize: "140%",
  },
  button_blue: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "150%",
    fontWeight: "600",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#AAC6FD",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default Profile;

/*Julian's Notes

-UPDATED "Edit Profile" button
-UPDATED "linkItem" & "linkContainer" style calls (alignment)
-ADDED glow to list icons (border style calls under "iconPlaceholder")
*/
