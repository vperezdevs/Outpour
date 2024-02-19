import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const Forgot = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/Logo_Outpour_Long.png")}
      />
      <Text style={styles.title}>Recover Password</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabelLoggedOut}>Recovery Email</Text>
        <TextInput label="Email" style={styles.input_red} placeholder="email" />
        <Text style={styles.inputLabelLoggedOut}>Confirm Recovery Email</Text>
        <TextInput
          label="Confirm"
          style={styles.input_blue}
          placeholder="Confirm"
        />
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity //Signin
            style={styles.submitButtonSU}
            onPress={() => navigation.navigate("Home")}
          >
            <Text styles={styles.submitButtonTextSU}>Send Link</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
/*
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
      width: 300,
      height: 110
    },
    input: {
      backgroundColor: "#fcfdff",
    },
    inputLabelLoggedOut: {
      color: "#FFF",
      fontSize: 12,
      marginTop: 10,
    },
  });
*/

export default Forgot;
