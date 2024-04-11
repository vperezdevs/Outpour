import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { db, auth } from "./firebase"; // Ensure these are correctly imported
import { doc, updateDoc, getDoc } from "firebase/firestore";
import PageTitle from "./PageTitle";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    country: "",
    gender: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setProfile({
            fullName: userData.name || "",
            username: userData.userName || "",
            email: userData.email || "",
            phoneNumber: userData.phone || "",
            country: userData.country || "",
            gender: userData.gender || "",
          });
        } else {
          console.log("No user document found!");
        }
      }
    };
    fetchUserInfo();
  }, []);

  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, {
          name: profile.fullName,
          userName: profile.username,
          email: profile.email,
          phone: profile.phoneNumber,
          country: profile.country,
          gender: profile.gender,
        });
        Alert.alert(
          "Profile Updated",
          "Your profile has been updated successfully."
        );
        navigation.goBack();
      } catch (error) {
        console.error("Error updating document: ", error);
        Alert.alert("Error", "There was a problem updating your profile.");
      }
    }
  };

  const handleChange = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <View style={styles.containerEP}>
      <View style={styles.pageTitleContainer}>
        <PageTitle showBackButton={true} navigation={navigation} />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label="Full Name"
          value={profile.fullName}
          onChangeText={(text) => handleChange("fullName", text)}
        />
        <InputField
          label="Username"
          value={profile.username}
          onChangeText={(text) => handleChange("username", text)}
        />
        <InputField
          label="Email"
          value={profile.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <InputField
          label="Phone Number"
          value={profile.phoneNumber}
          onChangeText={(text) => handleChange("phoneNumber", text)}
        />
        <InputField
          label="Country"
          value={profile.country}
          onChangeText={(text) => handleChange("country", text)}
        />
        <InputField
          label="Gender"
          value={profile.gender}
          onChangeText={(text) => handleChange("gender", text)}
        />
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const InputField = ({ label, value, onChangeText }) => (
  <View style={styles.inputBox}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Enter ${label}`}
      placeholderTextColor="#A0A0A0"
    />
  </View>
);

export default EditProfile;