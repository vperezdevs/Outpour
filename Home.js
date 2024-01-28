import React from 'react';
import { StyleSheet, View, ScrollView, Button, Image, TextInput, Text, StatusBar } from 'react-native';

const Home = ( { navigation } ) => {
    return (
      <ScrollView 
        horizontal={true} 
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true} // Optionally hide the horizontal scroll indicators
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={styles.box}>
            <Text>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    scrollView: {
      // Style as needed
    },
    box: {
      width: 100, // Set the width of each item
      height: 100, // Set the height of each item
      backgroundColor: 'skyblue', // Just as an example
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      marginHorizontal: 5, // Add space between items
      // Add more styling as needed
    },
    // Add more styles as needed
  });

  export default Home;