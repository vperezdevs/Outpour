import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// Initialize the Firebase auth object
const auth = getAuth();

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState(""); // State to hold the email input

  // Function to handle sending the password reset email
  const handleSendLink = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Password reset link sent! Check your email.");
        navigation.navigate("SignInScreen"); 
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Failed to send password reset email: ${errorMessage}`);
        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* Your existing code */}
      <TextInput
        label="Email"
        style={{
          backgroundColor: "#fcfdff",
          borderWidth: 3,
          borderColor: "#FF8A8A",
          borderRadius: 5,
          padding: 3,
          height: 40,
          width: 300,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Update the email state on change
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.submitButtonSU}
          onPress={handleSendLink} 
        >
          <Text style={styles.submitButtonTextSU}>Send Link</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Forgot;
