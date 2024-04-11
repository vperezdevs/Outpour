
import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
  Pressable,
  Touchable,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Home from "./Home";
import BusinessPage from "./BusinessPage";
import Search from "./Search";
import UserReviews from "./UserReviews";
import UserAlerts from "./UserAlerts";
import Favorites from "./Favorites";
import UserBusiness from "./UserBusiness";
import EditProfile from "./EditProfile";
import Friends from "./Friends";
import Settings from "./Settings";
import ViewAll from "./ViewAll";
import EditUserBusiness from "./EditUserBusiness";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { auth, signInWithEmailAndPassword } from "./firebase"; // Adjust this import path as necessary
import { useState } from "react";

// Separate SignInScreen Component
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/Logo_Outpour_Long.png")}
      />
      <View style={styles.inputView}>
        <Text style={styles.inputLabelLoggedOut}>Email</Text>
        <TextInput
          label="Email"
          style={styles.input_blue}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email} // Ensure the input reflects the current state
        />
        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput
          label="password"
          style={styles.input_red}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password} // Ensure the input reflects the current state
          secureTextEntry // This prop hides the password input
        />
      </View>
      <View style={styles.button_field}>
        <TouchableOpacity //Signin
          style={styles.button_blue}
          accessibilityLabel="Enter Outpour app"
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity //Sign Up
          style={styles.button_blue}
          accessibilityLabel="Sign Up"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity //Forgot
          style={styles.button_red}
          accessibilityLabel="Forgot Password"
          onPress={() => navigation.navigate("Forgot")}
        >
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
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
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BusinessPage"
        component={BusinessPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserReviews"
        component={UserReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserAlerts"
        component={UserAlerts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserBusiness"
        component={UserBusiness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAll"
        component={ViewAll}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUserBusiness"
        component={EditUserBusiness}
        options={{ headerShown: false }}
      />
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

export default App;
