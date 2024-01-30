import React from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, StatusBar } from 'react-native';

const Forgot = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./Assets/Logo_Outpour_Long.png')} />
        <Text style={styles.title}>Recover Password</Text>
        <Text style={styles.inputLabelLoggedOut}>Recovery Email</Text>
        <TextInput label="Email" style={styles.input} placeholder="email" />
        <Text style={styles.inputLabelLoggedOut}>Confirm Recovery Email</Text>
        <TextInput label="Confirm" style={styles.input} placeholder="Confirm" />
        <View style={{ marginTop: 20 }}>
          <Button //Signin
            color="#CADBFC"
            title="Send Link"
            accessibilityLabel="Send Link"
            onPress={() => navigation.navigate('Signin')}
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
      fontSize: 45,
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


export default Forgot;