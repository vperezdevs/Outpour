import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Image, StyleSheet } from 'react-native';
import PageTitle from './PageTitle';
import { CommonActions } from '@react-navigation/native'; // Import CommonActions

const Settings = ({navigation}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
//placeholders for darkmode and notifications
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handleLogout = () => {
    // Reset the navigation state to the initial route
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SignInScreen' }],
      })
    );
  };


  const renderInput = (label, value, onToggle) => {
    if (label === 'Dark Mode' || label === 'Notifications') {
      return (
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>{label}</Text>
          <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
      );
    } else if (label === 'Log Out') {
      return (
        <TouchableOpacity style={styles.inputBox} onPress={handleLogout}>
          <Text style={styles.inputLabel}>{label}</Text>
          <Image source={require('./assets/logout.png')} style={styles.logoutIcon} />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>{label}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Heading */}
      <View>
        <PageTitle title="Settings" showBackButton={true} backgroundColor="#BE4621" navigation={navigation} />
      </View>

      {/* Stacked Input Boxes */}
      <View style={styles.inputContainer}>
        {renderInput('Location', false, () => {})} {/* Placeholder for Location */}
        {renderInput('Notifications', notifications, toggleNotifications)}
        {renderInput('Language', false, () => {})} {/* Placeholder for Language */}
        {renderInput('Dark Mode', darkMode, toggleDarkMode)}
        {renderInput('Log Out', false, () => {})} {/* Placeholder for Log Out */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    margin: 20,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: 'white',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  updateButton: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Settings;