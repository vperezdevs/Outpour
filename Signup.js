import React from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, StatusBar } from 'react-native';
const Signup = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/Logo_Outpour_Long.png')} /> 
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.inputLabelLoggedOut}>Email</Text>
        <TextInput label="Email" style={styles.input} placeholder="email" />
        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput label="password" style={styles.input} placeholder="password" />
        <Text style={styles.inputLabelLoggedOut}>Confirm Password</Text>
        <TextInput label="Confirm Password" style={styles.input} placeholder="Confirm Password" />
        <View style={{ marginTop: 20 }}>
          <Button //Signin
            color="#CADBFC"
            title="Sign Up"
            accessibilityLabel="Sign Up"
            onPress={() => navigation.navigate('Profile')}
          />
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
      justifyContent: 'center',
    },
    title: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fcfdff",
      marginBottom: 40,
    },
    inputView: {
      width: "80%",
      backgroundColor: "#fcfdff",
      borderRadius: 25,
      height: 50,
    },
    logo: {
      width: 300, // Changed from "200px" to 200 (React Native uses numbers for pixel values)
      height: 110
    },
    input: {
      backgroundColor: "#fcfdff",
    },
    inputLabelLoggedOut: {
      color: "#FFF",
      fontSize: 12, // Changed from "12px" to 12
      marginTop: 10, // Changed from "10px" to 10
    },
  });

  
  export default Signup;