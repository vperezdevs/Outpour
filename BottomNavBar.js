// BottomNavBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import homeIcon from './assets/home.png';
import searchIcon from './assets/search.png';
import profileIcon from './assets/Profile.png';

const BottomNavBar = ({ activeLink, navigation }) => {
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={[styles.navItem, activeLink === "Home" && styles.activeNavItem]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={homeIcon}
          style={[styles.navIcon, activeLink === "Home" && styles.activeNavIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activeLink === "Search" && styles.activeNavItem]}
        onPress={() => navigation.navigate("Search")}
      >
        <Image
          source={searchIcon}
          style={[styles.navIcon, activeLink === "Search" && styles.activeNavIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, activeLink === "Profile" && styles.activeNavItem]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={profileIcon}
          style={[styles.navIcon, activeLink === "Profile" && styles.activeNavIcon]}
        />
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
  navIcon: {
    width: 25, // Set your desired icon size
    height: 25,
    resizeMode: 'contain', // Ensure the icons fit well
  },
  activeNavItem: {
    // Add any styles you want for the active nav item
  },
  activeNavIcon: {
    // If you want to change the icon or style for active state
    // For example, tintColor: '#FF8A8A',
  },
});

export default BottomNavBar;

/*Notes
-UPDATED NavBar styling
*/
