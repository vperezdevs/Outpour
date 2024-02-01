import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PageTitle from './PageTitle';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.pageTitleContainer}>
        <PageTitle title="Edit Profile" showBackButton={true} backgroundColor="#EB9F05" navigation={navigation} />
      </View>


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
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    color:'white',
  },
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    margin: 20
  },
  inputBox: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 12,
    color: 'white',
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
    backgroundColor: '#CADBFC',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    margin: 40,
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
