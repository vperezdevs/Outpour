import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { db, auth } from "./firebase";
import { doc, getDoc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import BottomNavBar from "./BottomNavBar";
import PageTitle from "./PageTitle";
import styles from "./styles";

const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists() && docSnap.data().favorites) {
          const favoriteIds = docSnap.data().favorites; // Array of business IDs
          const favoritesData = await Promise.all(favoriteIds.map(async (id) => {
            const businessRef = doc(db, "businesses", id);
            const businessSnap = await getDoc(businessRef);
            return businessSnap.exists() ? { id, ...businessSnap.data() } : null;
          }));
          setFavorites(favoritesData.filter(Boolean));
        }
      }
    };

    fetchFavorites();
  }, []);

  const toggleFavorite = async (businessId) => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const currentFavorites = docSnap.data().favorites || [];
        const newFavorites = currentFavorites.includes(businessId) 
          ? currentFavorites.filter(id => id !== businessId) 
          : [...currentFavorites, businessId];

        await updateDoc(userRef, { favorites: newFavorites });
        fetchFavorites();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container2}>
      <PageTitle
        title="Favorites"
        showBackButton={true}
        backgroundColor="#BE4621"
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {favorites.map((business) => (
          <TouchableOpacity
            key={business.id}
            style={styles.cardFav}
            onPress={() => navigation.navigate("BusinessPage", { businessId: business.id })}
          >
            <Image
              source={{ uri: business.imageUrl }}
              style={styles.cardImageFav}
              resizeMode="cover"
            />
            <Text style={styles.cardTextFav}>{business.name}</Text>
            <TouchableOpacity 
              style={styles.heartIconFav} 
              onPress={() => toggleFavorite(business.id)}
            >
              <Icon name="heart" size={20} color="#ff0000" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export default Favorites;

