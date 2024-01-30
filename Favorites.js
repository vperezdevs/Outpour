import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from './BottomNavBar';
import PageTitle from './PageTitle';

const Favorites = () => {
  return (
    <View style={styles.container}>
      {/* Header with Heading */}
      <View>
        <PageTitle title="Favorites" showBackButton={true} backgroundColor="#BE4621" />
      </View>

      {/* Clickable Cards */}
      <View style={styles.cardContainer}>
        {/* Card 1 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./Assets/Cover_Wallys.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Wallys</Text>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('./Assets/favicon.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Card 2</Text>
        </TouchableOpacity>

        {/* Add similar blocks for Card 3 to Card 6 */}
      </View>

      <BottomNavBar activeLink="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1E1E1E',
  },
  header: {
    marginBottom: 20,
  },
  orangeStrip: {
    backgroundColor: '#BE4621',
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    position: 'absolute',
  },
  cardContainer: {
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 10,
    borderRadius: 2,
    overflow: 'hidden',
    borderColor: '#ffffff', // Your desired inner glow color
    boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
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
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  navItemText: {
    color: '#ffffff',
  },
});

export default Favorites;
