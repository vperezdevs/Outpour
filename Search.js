import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavBar from "./BottomNavBar";
import PageTitle from "./PageTitle";
import { db } from "./firebase"; // Ensure this points to your firebase config file
import styles from "./styles";
import { collection, query, where, getDocs } from "firebase/firestore";

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }
      const businessesRef = collection(db, "businesses");
      const lowercaseQuery = searchQuery.toLowerCase(); // Convert search query to lowercase
      const q = query(
        businessesRef,
        where("name_lowercase", ">=", lowercaseQuery),
        where("name_lowercase", "<=", lowercaseQuery + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(results);
    };
  
    fetchSearchResults();
  }, [searchQuery]);
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {/* Dynamically generated search results */}
        <View style={styles.cardContainer}>
          {searchResults.map((business) => (
            <TouchableOpacity
              key={business.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("BusinessPage", { businessId: business.id })
              }
            >
              <Image
                source={{ uri: business.bannerImage }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardText}>{business.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNavBar activeLink="Search" navigation={navigation} />
    </SafeAreaView>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    marginBottom: 20,
  },
  orangeStrip: {
    backgroundColor: "#BE4621",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  heading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchIcon: {
    position: "absolute",
    right: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    position: "absolute",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
  },
  card: {
    width: "48%",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardText: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#AAC6FD",
    color: "black",
  },
  bottomNavBar: {
    backgroundColor: "#1E1E1E",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  navItemText: {
    color: "#ffffff",
  },
});
*/
export default Search;