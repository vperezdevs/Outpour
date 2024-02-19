import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavBar from "./BottomNavBar";
import PageTitle from "./PageTitle";
import styles from "./styles";

const Favorites = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container2}>
      {/* Header with Page name */}
      <PageTitle
        title="Favorites"
        showBackButton={true}
        backgroundColor="#BE4621"
        navigation={navigation}
      />

      {/* ScrollView for the content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.cardContainerFav}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.cardFav}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImageFav}
              resizeMode="cover"
            />
            <Text style={styles.cardTextFav}>Wallys</Text>
            <TouchableOpacity style={styles.heartIconFav}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity
            style={styles.cardFav}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImageFav}
              resizeMode="cover"
            />
            <Text style={styles.cardTextFav}>Wallys</Text>
            <TouchableOpacity style={styles.heartIconFav}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 3 to demonstrate scroll */}
          <TouchableOpacity
            style={styles.cardFav}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImageFav}
              resizeMode="cover"
            />
            <Text style={styles.cardTextFav}>Wallys</Text>
            <TouchableOpacity style={styles.heartIconFav}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BottomNavBar at the bottom */}
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};
/*
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  cardContainerFav: {
    marginBottom: 50,
  },
  cardFav: {
    margin: 30,
    borderRadius: 2,
    overflow: "hidden",
    borderColor: "#ffffff",
    boxShadow: "rgb(121, 149, 255) 0px 0px 16px 4px",
    position: "relative",
  },
  cardImageFav: {
    width: "100%",
    height: 200,
  },
  cardTextFav: {
    padding: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  heartIconFav: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
*/
export default Favorites;
