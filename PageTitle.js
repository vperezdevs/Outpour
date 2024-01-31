import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PageTitle = ({ title, showBackButton, backgroundColor }) => {
  return (
    <View style={[styles.pageTitle, { backgroundColor: backgroundColor }]}>
      <View style={styles.row}>
      <View style={styles.backButtonCol}>
        {showBackButton && (<TouchableOpacity onPress={() => console.log('Go back')}>
            <Text style={styles.backButton}>&lt; Back</Text>
          </TouchableOpacity>
          
        )}
        </View>
        <View style={styles.center}>
          <Text style={styles.heading}>{title}</Text>
        </View>
        <View style={styles.emptySpace} />
      </View>
    </View>
  );
};

const styles = {
  pageTitle: {
    width: '100%',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center', // Center the title horizontally
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    left:30,
  },
  emptySpace: {
    flex: 1,
  },
  backButtonCol:{
    flex:1,
  }
};

export default PageTitle;