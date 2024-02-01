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
import { TouchableOpacity } from "react-native-web";

// Separate SignInScreen Component
const SignInScreen = ({ navigation }) => {
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
        />
        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput
          label="password"
          style={styles.input_red}
          placeholder="password"
        />
      </View>
      <View style={styles.button_field}>
        <TouchableOpacity //Signin
          style={styles.button_blue}
          accessibilityLabel="Enter Outpour app"
          onPress={() => navigation.navigate("Home")}
        >
          Sign-In
        </TouchableOpacity>
        <TouchableOpacity //Sign Up
          style={styles.button_blue}
          accessibilityLabel="Sign Up"
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </TouchableOpacity>

        <TouchableOpacity //Forgot
          style={styles.button_red}
          accessibilityLabel="Forgot Password"
          onPress={() => navigation.navigate("Forgot")}
        >
          Forgot Password
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

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  button_blue: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "200%",
    fontWeight: "bold",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#AAC6FD",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  button_red: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "200%",
    fontWeight: "bold",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#FF8A8A",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  button_field: {
    marginTop: "30%",
    alignContent: "center",
  },
  title_red: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FF8A8A",
  },
  title_blue: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#AAC6FD",
  },
  logo: {
    width: 300,
    height: 110,
    marginBottom: "20%",
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
  },
  input_red: {
    backgroundColor: "#fcfdff",
    borderWidth: 3,
    borderColor: "#FF8A8A",
    borderRadius: 5,
    padding: 5,
  },
  input_blue: {
    backgroundColor: "#fcfdff",
    borderWidth: 3,
    borderColor: "#75A1F5",
    borderRadius: 5,
    padding: 5,
  },
  inputLabelLoggedOut: {
    color: "#FFF",
    fontSize: 20, // Changed from "12px" to 12
    marginTop: 10, // Changed from "10px" to 10
  },
});

export default App;

/*Julian's Notes
-FIXED bottom edge of logo clipping
-REMOVED "Sign-In" title from landing screen
-REPLACED landing page <Button>s with <TouchableOpacity>
-ADDED "input_red" & "input_blue" style calls
-ADDED "button_red","button_blue", and "button_field" style calls
*/