import React from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';

// Separate SignInScreen Component
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/Logo_Outpour_Long.png')} />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.inputLabelLoggedOut}>Email</Text>
      <TextInput label="Email" style={styles.input} placeholder="email" />
      <Text style={styles.inputLabelLoggedOut}>Password</Text>
      <TextInput label="password" style={styles.input} placeholder="password" />
      <View style={{ marginTop: 20 }}>
        <Button
          color="#CADBFC"
          title="Sign In"
          accessibilityLabel="Enter Outpour app"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// App Component
function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// Styles
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

export default App;
