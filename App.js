//basic expo/react native project setup
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, Button } from 'react-native';

const App = () => {
    //create sign-in text
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
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
    
  }
});

export default App;