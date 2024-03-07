import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { db } from './firebase'; // Ensure this is the correct path to your Firebase config
import { collection, getDocs } from 'firebase/firestore';
import BottomNavBar from './BottomNavBar';
import styles from './styles';

const ViewAll = ({ navigation }) => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const querySnapshot = await getDocs(collection(db, 'businesses'));
      const businessesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBusinesses(businessesData);
    };

    fetchBusinesses();
  }, []);

  return (
    <View style={styles.container2}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.cardContainer}>
          {businesses.map((business) => (
            <TouchableOpacity
              key={business.id}
              style={styles.card}
              onPress={() => navigation.navigate('BusinessPage', { businessId: business.id })}
            >
              <Image
                source={{ uri: business.imageUrl }} // Assuming you have a coverImage field in your documents
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardText}>{business.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNavBar activeLink="Home" navigation={navigation} />
    </View>
  );
};

export default ViewAll;