import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';

const Alerts = ({navigation}) => {
  // Placeholder data for the alerts
  const alerts = [
    { id: '1', type: 'friend_request', user: 'Lee Murphy', timestamp: '1h ago', userProfilePic: './assets/friend2.jpg' },
    { id: '2', type: 'like', user: 'Ray Arnold', timestamp: '2h ago', userProfilePic: './assets/friend3.jpg' },
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
    <Text style={styles.buttonText}>Accept</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.declineButton}>
    <Text style={styles.buttonText}>Decline</Text>
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
        title="User Alerts"
        showBackButton={true}
        backgroundColor="#BE4621" 
        navigation={navigation}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  alertItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#AAC6FD",
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
    color: '#ffffff',
  },
  alertText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#ffffff',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
  acceptButton: {
    marginRight: 10,
    backgroundColor: '#E95744',
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
  },
  declineButton: {
    borderColor: 'white',
    borderWidth: 1,
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'grey',
  },
});

export default Alerts;
