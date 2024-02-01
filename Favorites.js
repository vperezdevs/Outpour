import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from './BottomNavBar';
import PageTitle from './PageTitle';

const Favorites = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Page name */}
      <PageTitle title="Favorites" showBackButton={true} backgroundColor="#BE4621" navigation={navigation} />

      {/* ScrollView for the content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BusinessPage")}>
            <Image
              source={require('./assets/Cover_Wallys.jpg')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BusinessPage")}>
            <Image
              source={require('./assets/Cover_Wallys.jpg')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Card 3 to demonstrate scroll */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BusinessPage")}>
            <Image
              source={require('./assets/Cover_Wallys.jpg')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardText}>Wallys</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={20} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BottomNavBar at the bottom */}
      <BottomNavBar activeLink="Profile" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  cardContainer: {
    marginBottom: 50,
  },
  card: {
    margin: 30,
    borderRadius: 2,
    overflow: 'hidden',
    borderColor: '#ffffff', // Your desired inner glow color
    boxShadow: 'rgb(121, 149, 255) 0px 0px 16px 4px',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomNavBar: {
    // If you have specific styles for BottomNavBar, define them here
  },
  // ... Other styles remain the same ...
});

export default Favorites;
