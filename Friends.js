import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PageTitle from './PageTitle';
import BottomNavBar from './BottomNavBar';
import { db, auth } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import styles from './styles';

const placeholderProfilePic = require("./assets/ProfilePicturePlaceholder.png");

const Friends = ({ navigation }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriendsData = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.log('No user signed in');
        return;
      }

      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userFriendsUids = userDoc.data().friends || [];
        const fetchedFriends = await Promise.all(
          userFriendsUids.map(async (uid) => {
            const friendRef = doc(db, 'users', uid);
            const friendDoc = await getDoc(friendRef);
            if (friendDoc.exists()) {
              return {
                id: uid,
                userName: friendDoc.data().userName || 'No Username',
                name: friendDoc.data().name || 'No Name',
                profilePictureUrl: friendDoc.data().userProfilePic,
              };
            } else {
              console.log('Friend not found');
              return null;
            }
          })
        );

        setFriends(fetchedFriends.filter(friend => friend !== null));
      } else {
        console.log('No such user document!');
      }
    };

    fetchFriendsData();
  }, []);

  return (
    <SafeAreaView style={styles.container2}>
      <PageTitle title="Friends" showBackButton={true} backgroundColor="#BE4621" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.friendList}>
        {friends.map(friend => (
          <View key={friend.id} style={styles.friendContainer}>
            <View style={styles.friendContent}>
              <Image 
                source={friend.profilePictureUrl ? { uri: friend.profilePictureUrl } : placeholderProfilePic} 
                style={styles.friendImage} 
              />
              <Text style={styles.friendName}>{friend.userName} - {friend.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default Friends;
