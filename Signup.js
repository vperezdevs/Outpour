import React, { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity, Image } from "react-native";
import { auth, db } from './firebase'; // Ensure db is exported from your firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from "./styles";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');

  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSignUp = async () => {
    if (!isValidEmail(email) || !password || !confirmPassword || !name || !userName || !phone || !country || !gender) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      // Now, save the additional user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        userName,
        phone,
        country,
        gender,
        email: user.email, // Optionally save email to the Firestore document
        // You can initialize any additional fields here as needed
      });
      console.log("User created and data saved to Firestore", user);
      navigation.navigate("Home");
    })
    .catch((error) => {
      Alert.alert("Error creating user", error.message);
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
        <Text style={styles.inputLabelLoggedOut}>Name</Text>
        <TextInput
        label="Name"
        style={styles.input_blue}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
        <Text style={styles.inputLabelLoggedOut}>Username</Text>
        <TextInput
        label="Username"
        style={styles.input_red}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
        <Text style={styles.inputLabelLoggedOut}>Phone Number</Text>
        <TextInput
        label="Phone"
        style={styles.input_blue}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
        <Text style={styles.inputLabelLoggedOut}>Country</Text>
        <TextInput
        label="Country"
        style={styles.input_red}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
        <Text style={styles.inputLabelLoggedOut}>Gender</Text>
        <TextInput
        label="Gender"
        style={styles.input_blue}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
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
