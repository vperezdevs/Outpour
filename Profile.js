//basic expo/react native project setup
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import BottomNavBar from './BottomNavBar';
import EditProfile from './EditProfile';

const Profile = ( {navigation} ) => {

  const handleLinkPress = (linkName) => {
    console.log(`Link ${linkName} was pressed!`); // Replace with your actual navigation or other actions
    if (linkName === 'Reviews') {
      navigation.navigate('UserReviews') // Navigate to UserReviews when "Reviews" is clicked
    } else if (linkName === 'Alerts'){
      navigation.navigate('UserAlerts')
    } else if (linkName === 'Favorites'){
      navigation.navigate('Favorites')
    } else if (linkName === 'My Business'){
      navigation.navigate('UserBusiness')
    } else if (linkName === 'Friends'){
      navigation.navigate('Friends')
    } else if (linkName === 'Settings'){
      navigation.navigate('Settings')
    }

  };

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>John Doe</Text>
        <Image style={styles.profilePicture} source={require('./assets/Profile Picture Persona.png')} />
        <View style={styles.editProfileButton}>
          <Button color="#CADBFC" title="Edit Profile" accessibilityLabel="Customize Profile" onPress={handleEditProfilePress}/>
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
      <BottomNavBar activeLink="Profile" navigation={navigation} />
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
    marginTop: 40
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
