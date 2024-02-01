import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';

const Alerts = ({navigation}) => {
  // Placeholder data for the alerts
  const alerts = [
    { id: '1', type: 'friend_request', user: 'Lee Murphy', timestamp: '1h ago', userProfilePic: 'path/to/LeeMurphyPic.png' },
    { id: '2', type: 'like', user: 'Ray Arnold', timestamp: '2h ago', userProfilePic: 'path/to/RayArnoldPic.png' },
    // Add more alerts as needed
  ];

  // Render each individual alert item
  const AlertItem = ({ alert }) => {
    return (
      <View style={styles.alertItem}>
        <Image style={styles.userProfilePic} source={{ uri: alert.userProfilePic }} />
        <View style={styles.alertContent}>
          <Text style={styles.alertText}>
            {alert.type === 'friend_request' ? `${alert.user} sent a friend request.` : `${alert.user} liked your review`}
          </Text>
          {alert.type === 'friend_request' && (
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.acceptButton}>
                <Text>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineButton}>
                <Text>Decline</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.timestamp}>{alert.timestamp}</Text>
        </View>
      </View>
    );
  };

  // Render the list of alerts
  return (
    <View style={styles.container}>
        <PageTitle 
        title="User Reviews" // Set the title you want
        showBackButton={true} // Determine based on your navigation structure
        backgroundColor="#333" // Set the color you prefer
        navigation={navigation} // Pass the navigation prop
      />
      <FlatList
        data={alerts}
        renderItem={({ item }) => <AlertItem alert={item} />}
        keyExtractor={item => item.id}
      />
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </View>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alertItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  userProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  alertContent: {
    flex: 1,
    justifyContent: 'center',
  },
  alertText: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  acceptButton: {
    marginRight: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  declineButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'grey',
  },
  // ... more styles ...
});

export default Alerts;
