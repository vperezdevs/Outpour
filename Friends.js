import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';

const Friends = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      {/* Header with Heading */}
      <View>
      <PageTitle title="Friends" showBackButton={true} backgroundColor="#BE4621"navigation={navigation} />
    </View>
    <View style={styles.container}>
      

      {/* List of Friends */}
      <View style={styles.friendList}>
        {renderFriend('Joana Summit', require('./assets/friend1.jpg'))}
        {renderFriend('Chris Lake', require('./assets/friend2.jpg'))}
        {renderFriend('Max Stelar', require('./assets/friend3.jpg'))}
        {renderFriend('Denniz Cruz', require('./assets/friend4.jpg'))}
        {renderFriend('Davina Guetta', require('./assets/friend5.jpg'))}
      </View>
    </View>
    <BottomNavBar activeLink="Profile" navigation={navigation} />
    </View>
  );
};

const renderFriend = (name, imageSource) => {
  return (
    <View style={styles.friendContainer}>
      <View style={styles.friendContent}>
        <Image source={imageSource} style={styles.friendImage} />
        <Text style={styles.friendName}>{name}</Text>
      
    
      </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  friendList: {
    marginBottom: 20,
    padding: 20,
  },
  friendContainer: {
    marginBottom: 15,
    height: 60,
  },
  friendContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    borderColor: "#FF8A8A",
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  friendName: {
    color: 'white',
    flex: 1,
    padding: 10,
  },
  bottomNavBar: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Friends;