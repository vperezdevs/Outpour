import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavBar from "./BottomNavBar";
import PageTitle from "./PageTitle";
import BusinessPage from "./BusinessPage";
import styles from "./styles";

const ViewAll = ({ navigation }) => {
  return (
    <View style={styles.container2}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Clickable Cards */}
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_WillsPub.png")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Will's Pub</Text>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_WillsPub.png")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Will's Pub</Text>
          </TouchableOpacity>
          {/* Card 5 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
          </TouchableOpacity>

          {/* Card 6 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_Wallys.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
          </TouchableOpacity>
          {/* Card 6 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("BusinessPage")}
          >
            <Image
              source={require("./assets/Cover_WillsPub.png")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Will's Pub</Text>
          </TouchableOpacity>
          {/* Add similar blocks for Card 3 to Card 6 */}
        </View>
      </ScrollView>
      <BottomNavBar activeLink="Home" navigation={navigation} />
    </View>
  );
};

export default ViewAll;
