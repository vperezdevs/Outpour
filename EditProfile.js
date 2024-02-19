import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import PageTitle from "./PageTitle";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container2}>
      {/* Header with Back Button */}
      <View style={styles.pageTitleContainer}>
        <PageTitle
          title="Edit Profile"
          showBackButton={true}
          backgroundColor="#EB9F05"
          navigation={navigation}
        />
      </View>

      {/* Stacked Input Boxes */}
      <View style={styles.inputContainer}>
        {renderInput("Full Name")}
        {renderInput("Username")}
        {renderInput("Email")}
        {renderInput("Phone Number")}
        {renderInput("Country")}
        {renderInput("Gender")}
      </View>
      {/* Update Button */}
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => console.log("Update")}
      >
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const renderInput = (label) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Enter ${label}`}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

export default EditProfile;
