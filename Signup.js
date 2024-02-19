import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/Logo_Outpour_Long.png")}
      />
      <Text style={styles.titleSU}>Sign Up</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabelLoggedOut}>Email</Text>
        <TextInput label="Email" style={styles.input_red} placeholder="Email" />
        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput
          label="password"
          style={styles.input_blue}
          placeholder="Password"
        />
        <Text style={styles.inputLabelLoggedOut}>Confirm Password</Text>
        <TextInput
          label="Confirm Password"
          style={styles.input_red}
          placeholder="Confirm Password"
        />
        <TouchableOpacity //Signin
          style={styles.submitButtonSU}
          onPress={() => navigation.navigate("Home")}
        >
          <Text styles={styles.submitButtonTextSU}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
