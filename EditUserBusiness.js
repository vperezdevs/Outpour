import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import BottomNavBar from "./BottomNavBar";
import PageTitle from "./PageTitle";
import styles from "./styles";

const EditUserBusiness = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer2}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.containerBis}>
        <View>
          <PageTitle
            title="My Business"
            showBackButton={true}
            backgroundColor="#EB9F05"
            navigation={navigation}
          />
        </View>

        {/* Image */}
        <Image
          source={require("./assets/Cover_Wallys.jpg")}
          style={styles.imageEB}
          resizeMode="cover"
        />

        {/* Stacked Input Boxes */}
        <View style={styles.inputContainerEB}>
          {renderInput("Name")}
          {renderInput("Phone Number")}
          {renderInput("Address")}

          {/* City and State input boxes inline */}
          <View style={styles.inlineInputContainerEB}>
            {renderInlineInput("City")}
            {renderInlineInput("State")}
          </View>
        </View>

        {/* Update Button */}
        <TouchableOpacity
          style={styles.updateButtonEB}
          onPress={() => navigation.navigate("UserBusiness")}
        >
          <Text style={styles.updateButtonTextEB}>Update</Text>
        </TouchableOpacity>
      </View>

      <BottomNavBar activeLink="Profile" />
    </ScrollView>
  );
};

const renderInput = (label) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.labelTextEB}>{label}</Text>
      <TextInput
        style={styles.inputEB}
        placeholder={`Enter ${label}`}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const renderInlineInput = (label) => {
  return (
    <View style={[styles.inputBoxEB, styles.inlineInputBoxEB]}>
      <Text style={styles.labelTextEB}>{label}</Text>
      <TextInput
        style={styles.inputEB}
        placeholder={`Enter ${label}`}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

export default EditUserBusiness;
