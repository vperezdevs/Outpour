import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  SafeAreaView,
} from "react-native";
import PageTitle from "./PageTitle";
import { CommonActions } from "@react-navigation/native";
import { auth } from './firebase'; // Ensure auth is exported from your firebase config
import { signOut } from 'firebase/auth';
import styles from "./styles";

const Settings = ({ navigation }) => {
  const [notifications, setNotifications] = useState(false);

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "SignInScreen" }],
        })
      );
    }).catch((error) => {
      console.error("Sign out error", error);
    });
  };

  const renderInput = (label, value, onToggle) => {
    if (label === "Notifications") {
      return (
        <View style={styles.inputBoxSet}>
          <Text style={styles.inputLabelSet}>{label}</Text>
          <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      );
    } else if (label === "Log Out") {
      return (
        <TouchableOpacity style={styles.inputBoxSet} onPress={handleLogout}>
          <Text style={styles.inputLabelSet}>{label}</Text>
          <Image
            source={require("./assets/logout.png")}
            style={styles.logoutIconSet}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.inputBoxSet}>
          <Text style={styles.inputLabelSet}>{label}</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container2}>
      {/* Header with Heading */}
      <View>
        <PageTitle
          title="Settings"
          showBackButton={true}
          backgroundColor="#BE4621"
          navigation={navigation}
        />
      </View>

      {/* Stacked Input Boxes */}
      <View style={styles.inputContainerEB}>
        {renderInput("Location", false, () => {})}
        {renderInput("Notifications", notifications, toggleNotifications)}
        {renderInput("Language", false, () => {})}
        {renderInput("Log Out", false, () => {})}
      </View>
    </SafeAreaView>
  );
};

export default Settings;

/*
Julian's Notes 2: iOS Boogaloo

- REMOVED placeholder comments, caused text render error
*/
