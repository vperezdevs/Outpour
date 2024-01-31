// BottomNavBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomNavBar = ({ activeLink }) => {
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity style={[styles.navItem, activeLink === 'home' && styles.activeNavItem]}>
        <Text style={[styles.navItemText, activeLink === 'home' && styles.activeNavItemText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, activeLink === 'search' && styles.activeNavItem]}>
        <Text style={[styles.navItemText, activeLink === 'search' && styles.activeNavItemText]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, activeLink === 'profile' && styles.activeNavItem]}>
        <Text style={[styles.navItemText, activeLink === 'profile' && styles.activeNavItemText]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navItemText: {
    color: '#ffffff',
  },
  activeNavItemText: {
    color: '#0D99FF', // Set the text color for the active link
    fontWeight: 'bold', // Optional: Add fontWeight for emphasis
  },
});

export default BottomNavBar;
