//basic expo/react native project setup
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Button, Image } from 'react-native';


const Profile = () => {
    // create sign-in text
    return (
      <View style={styles.container}>
        <Text style={styles.title}>John Doe</Text>
        <Image style={styles.logo} source={require('./Assets/Profile Picture Persona.png')} />
        <View style={{ marginTop: 20 }}>
        <Button color="#CADBFC" title="Edit Profile" accessibilityLabel="Customize Profile"/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
     },
    });
    
export default Profile;