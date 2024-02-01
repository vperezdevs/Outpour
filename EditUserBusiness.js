import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import BottomNavBar from './BottomNavBar';
import PageTitle from './PageTitle';

const EditUserBusiness = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View>
          <PageTitle title="My Business" showBackButton={true} backgroundColor="#EB9F05" />
        </View>

        {/* Image */}
        <Image
          source={require('./assets/Cover_Wallys.jpg')}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Stacked Input Boxes */}
        <View style={styles.inputContainer}>
          {renderInput('Name')}
          {renderInput('Phone Number')}
          {renderInput('Address')}
          
          {/* City and State input boxes inline */}
          <View style={styles.inlineInputContainer}>
            {renderInlineInput('City')}
            {renderInlineInput('State')}
          </View>
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

const renderInlineInput = (label) => {
  return (
    <View style={[styles.inputBox, styles.inlineInputBox]}>
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
    color: 'white',
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    marginBottom: 15,
    flex: 1,
  },
  inlineInputBox: {
    marginLeft: 5,
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
    marginBottom: 40,
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditUserBusiness;