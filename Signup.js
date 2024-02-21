import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
  Alert
} from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from './firebase';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSignUp = () => {
    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
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
      <Text style={styles.titleSU}>Sign Up</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabelLoggedOut}>Email</Text>

        <TextInput label="Email" style={styles.input_red} 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail}/>

        <Text style={styles.inputLabelLoggedOut}>Password</Text>
        <TextInput
          label="password"
          style={styles.input_blue}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.inputLabelLoggedOut}>Confirm Password</Text>
        <TextInput
          label="Confirm Password"
          style={styles.input_red}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity //Signin
          style={styles.submitButtonSU}
          onPress={handleSignUp}
        >
          <Text styles={styles.submitButtonTextSU}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
