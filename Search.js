import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from './BottomNavBar';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* Header with Heading */}
      <View style={styles.header}>
        <View style={styles.orangeStrip}>
          <Text style={styles.heading}>Search</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        // Add any additional TextInput props or styling here
      />
      <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TouchableOpacity style={styles.filterButton}>
          {/* Placeholder icon for filtering */}
          <Icon name="filter" size={20} color="white" style={styles.filterIcon} />
        </TouchableOpacity>
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
<BottomNavBar activeLink="search" />
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
  },searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative', // Make the container relative for absolute positioning
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    paddingLeft: 30, // Adjust padding to make space for the icon
    borderRadius: 5,
  },
  searchIcon: {
    position: 'absolute',
    right: 70, // Adjust the left position to align the icon as needed
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'red',
    color:'white'
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
    paddingBottom:20,
  },
  navItemText: {
    color: '#ffffff',
  },
});

export default Search;
