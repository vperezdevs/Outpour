import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import PageTitle from "./PageTitle";
import BottomNavBar from "./BottomNavBar";
import styles from "./styles";

const Alerts = ({ navigation }) => {
  // Placeholder data for the alerts
  const alerts = [
    {
      id: "1",
      type: "friend_request",
      user: "Lee Murphy",
      timestamp: "1h ago",
      userProfilePic: "./assets/friend2.jpg",
    },
    {
      id: "2",
      type: "like",
      user: "Ray Arnold",
      timestamp: "2h ago",
      userProfilePic: "./assets/friend3.jpg",
    },
  ];


  const AlertItem = ({ alert }) => {
    return (
      <View style={styles.alertItemUA}>
        <Image
          style={styles.userProfilePicUA}
          source={{ uri: alert.userProfilePic }}
        />
        <View style={styles.alertContentUA}>
          <Text style={styles.alertTextUA}>
            {alert.type === "friend_request"
              ? `${alert.user} sent a friend request.`
              : `${alert.user} liked your review`}
          </Text>
          {alert.type === "friend_request" && (
            <View style={styles.buttonGroupUA}>
              <TouchableOpacity style={styles.acceptButtonUA}>
                <Text style={styles.buttonTextUA}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineButtonUA}>
                <Text style={styles.buttonTextUA}>Decline</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.timestampUA}>{alert.timestamp}</Text>
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.container2}>
      <PageTitle
        title="User Alerts"
        showBackButton={true}
        backgroundColor="#BE4621"
        navigation={navigation}
      />
      <FlatList
        data={alerts}
        renderItem={({ item }) => <AlertItem alert={item} />}
        keyExtractor={(item) => item.id}
      />
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default Alerts;
