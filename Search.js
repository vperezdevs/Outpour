import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavBar from './BottomNavBar';
import PageTitle from './PageTitle';
import BusinessPage from './BusinessPage';

const Search = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
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
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_Wallys.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Wallys</Text>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_WillsPub.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Will's Pub</Text>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_WillsPub.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Will's Pub</Text>
        </TouchableOpacity>
                {/* Card 5 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_Wallys.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Wallys</Text>
        </TouchableOpacity>

        {/* Card 6 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_Wallys.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Wallys</Text>
        </TouchableOpacity>
                {/* Card 6 */}
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BusinessPage')}>
          <Image
            source={require('./assets/Cover_WillsPub.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardText}>Will's Pub</Text>
        </TouchableOpacity>
        {/* Add similar blocks for Card 3 to Card 6 */}
      </View>
      </ScrollView>
      <BottomNavBar activeLink="Search" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 50,
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  card: {
    width: '48%',
    marginBottom: 10,
    borderRadius: 10,
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