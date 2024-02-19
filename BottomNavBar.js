// BottomNavBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomNavBar = ({ activeLink, navigation }) => {
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={[styles.navItem, activeLink === "Home" && styles.activeNavItem]}
        onPress={() => navigation.navigate("Home")} // Navigate to Home screen
      >
        <Text
          style={[
            styles.navItemText,
            activeLink === "Home" && styles.activeNavItemText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeLink === "Search" && styles.activeNavItem,
        ]}
        onPress={() => navigation.navigate("Search")} // Navigate to Search screen
      >
        <Text
          style={[
            styles.navItemText,
            activeLink === "Search" && styles.activeNavItemText,
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeLink === "Profile" && styles.activeNavItemText,
        ]}
        onPress={() => navigation.navigate("Profile")} // Navigate to Profile screen
      >
        <Text
          style={[
            styles.navItemText,
            activeLink === "Profile" && styles.activeNavItemText,
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    backgroundColor: "#1a1919",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 3,
    borderColor: "#75A1F5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navItemText: {
    color: "#ffffff",
    fontSize: "30%",
  },
  activeNavItemText: {
    color: "#FF8A8A", // Set the text color for the active link
    fontWeight: "bold", // Optional: Add fontWeight for emphasis
  },
});

export default BottomNavBar;

/*Notes
-UPDATED NavBar styling
*/
