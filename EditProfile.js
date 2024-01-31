import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import BottomNavBar from './BottomNavBar';

const EditProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Header with Back Button */}
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <Text style={styles.backButton}>&lt; Back</Text>
        </TouchableOpacity>

        {/* Stacked Input Boxes */}
        <View style={styles.inputContainer}>
          {renderInput('Full Name')}
          {renderInput('Username')}
          {renderInput('Email')}
          {renderInput('Phone Number')}
          {renderInput('Country')}
          {renderInput('Gender')}
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={() => console.log('Update')}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
      
      <BottomNavBar activeLink="search" />
    </ScrollView>
  );
};

const renderInput = (label) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.input} placeholder={`Enter ${label}`} placeholderTextColor="#A0A0A0" />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    color: 'white',
    padding: 20,
  },
  backButton: {
    color: 'white', // Adjust color as needed
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 12,
    color: 'white', // Adjust color as needed
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  updateButton: {
    backgroundColor: '#CADBFC', // Adjust color as needed
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40,
  },
  updateButtonText: {
    color: 'black', // Adjust color as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
