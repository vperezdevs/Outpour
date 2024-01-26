//basic expo/react native project setup
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import Profile from './Profile';

const App = () => {
    //create sign-in text
    return(
      <View style={styles.container}>
        <Image style={styles.Logo} source={require('./Assets/Logo_Outpour_Long.png')}/>
        <Text style={styles.title}>Sign In</Text>
        <Text style= {styles.inputLabelLoggedOut}>Email</Text>
        <TextInput label="Email" style={styles.input} placeholder="email"/>
        <Text style= {styles.inputLabelLoggedOut}>Password</Text>
        <TextInput label="password" style={styles.input} placeholder="password"/>
        <View style={{ marginTop: 20 }}>
        <Button color="#CADBFC" title="Sign In" accessibilityLabel="Enter Outpour app"/>
        </View>
        <StatusBar style="auto" />
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontWeight: "bold",
         fontSize:50,color:"#fcfdff",
         marginBottom: 40,
        },
  inputView:{
    width:"80%",
    backgroundColor:"#fcfdff",
    borderRadius:25,
    height:50,
    
  },
  logo:{
    width:"200px"
  },
  input:{
    backgroundColor: "#fcfdff",
  },
  inputLabelLoggedOut: {
    color: "#FFF",
    fontSize: "12px",
    marginTop: "10px"
  }, 
});

export default App;