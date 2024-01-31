//basic expo/react native project setup
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

const Profile = () => {

  const handleLinkPress = (linkName) => {
    console.log(`Link ${linkName} was pressed!`); // Replace with your actual navigation or other actions
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>John Doe</Text>
        <Image style={styles.profilePicture} source={require('./Assets/Profile Picture Persona.png')} />
        <View style={styles.editProfileButton}>
          <Button color="#CADBFC" title="Edit Profile" accessibilityLabel="Customize Profile"/>
        </View>
        <View style={styles.linksContainer}>
          {['My Business', 'Favorites', 'Alerts', 'Friends', 'Reviews', 'Settings'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.linkItem} onPress={() => handleLinkPress(item)}>
              {/* Placeholder for icon */}
              <View style={styles.iconPlaceholder} />
              <Text style={styles.linkText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollView: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 150, // Set your own width
    height: 150, // Set your own height
    borderRadius: 75, // Adjust for roundness
    marginTop: 20,
    marginBottom: 20,
  },
  editProfileButton: {
    marginBottom: 40, // Space between button and links
  },
  linksContainer: {
    width: '100%',
    alignItems: 'center',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Space between items
  },
  iconPlaceholder: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: '#555', // Placeholder color
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  linkText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default Profile;
