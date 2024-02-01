import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';

const BusinessPage = ({ navigation }) => {
    //Placeholder data
    const businessDetails = {
        name: 'Business Name',
        address: '123 Business St, City',
        bannerImage: './assets/Business_Banner.png',
        mapImage: './assets/Map_Graphic.png',
    };

    const reviews = [
        {
            id: 1,
            userName: 'John Doe',
            userProfilePic: './assets/Profile Picture Persona.png',
            reviewDate: 'Jan 20, 2024',
            reviewContent: 'Great place, loved the ambiance!',
            rating: 4.5,
        },
        //more reviews
    ];

    const [activeSection, setActiveSection] = useState('reviews');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Back link */}
            <TouchableOpacity style={styles.backLink} onPress={() => navigation.goBack()}>
    <Text style={styles.backLinkText}>Back</Text>
</TouchableOpacity>

            {/* Banner Image */}
            <Image source={{ uri: businessDetails.bannerImage }} style={styles.bannerImage} />

            {/* Business Details */}
            <View style={styles.businessDetailsContainer}>
                <View style={styles.businessInfo}>
                    <Text style={styles.businessName}>{businessDetails.name}</Text>
                    <Text style={styles.businessAddress}>{businessDetails.address}</Text>
                </View>
            </View>

            {/* Map Placeholder */}
            <TouchableOpacity style={styles.mapPlaceholder}>
                        <Image source={{ uri: businessDetails.mapImage }} style={styles.mapImage} />
                        <View style={styles.overlay} />
                        <Text style={styles.mapText}>Map</Text>
                    </TouchableOpacity>

            {/* Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => handleNavClick('rating')}>
                    <Text style={styles.navBarItem}>Rating</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavClick('reviews')}>
                    <Text style={styles.navBarItem}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavClick('rate')}>
                    <Text style={styles.navBarItem}>Rate</Text>
                </TouchableOpacity>
            </View>

            {activeSection === 'rating' && (
                            <View style={styles.sliderContainer}>
                            <Slider
                                style={styles.slider}
                                minimumValue={1}
                                maximumValue={5}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#FFFFFF"
                                step={0.5}
                                value={5}
                            />
                            <Text>
                                <Text style ={styles.reviewText}>Users rate this bar highly for its ambiance and customer service.</Text>
                            </Text>
                        </View>
                    )}

            {activeSection === 'reviews' && (
                <View>
            {reviews.map((review) => (
                <View key={review.id} style={styles.reviewBox}>
                    <View style={styles.reviewHeader}>
                        <Image source={{ uri: review.userProfilePic }} style={styles.userProfilePic} />
                        <View>
                            <Text style={styles.userName}>{review.userName}</Text>
                            <Text style={styles.reviewDate}>{review.reviewDate}</Text>
                        </View>
                    </View>
                    <Text style={styles.reviewContent}>{review.reviewContent}</Text>
                    <Slider
                                style={styles.slider}
                                minimumValue={1}
                                maximumValue={5}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#FFFFFF"
                                step={0.5}
                                value={5}
                            />
                </View>
            ))}
            </View>
            )}
                                {activeSection === 'rate' && (
                        <View>
                            <TextInput style={styles.rateInput} placeholder="Write your review..." />
                            <View style={styles.sliderContainer}>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={1}
                                    maximumValue={5}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#FFFFFF"
                                    step={0.5}
                                    value={5}
                                /></View>
                                    <TouchableOpacity style={styles.submitButton} onPress={() => { /* Submit action here */ }}>
                                <Text style={styles.submitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        color: '#ffffff'
    },
    backLinkText: {
        padding: 10,
        color:'#ffffff',
        fontWeight: 'bold',
    },
    bannerImage: {
        width: '100%',
        height: '33%', // Adjust as needed
        // Add more styles as needed
    },
    businessDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // Add more styles as needed
    },
    reviewText: {
        justifyContent: 'center',
        color: '#ffffff',
    },
    sliderContainer: {
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
    },
    slider:{
        width: 300,
        height: 40,
    },
    businessInfo: {
        // Add more styles as needed
        color: '#ffffff',
    },
    businessName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ffffff',
        // Add more styles as needed
    },
    businessAddress: {
        // Add more styles as needed
        color: '#ffffff',
    },
    businessRating: {
        // Add more styles as needed
        color: '#ffffff',
    },
    mapPlaceholder: {
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        margin: 10,
        // Add more styles as needed
    },
    mapImage: {
        width: '100%',
        height: 200,
        // Add more styles as needed
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Make the overlay fill the entire container
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark color with 50% opacity
      },
    mapText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -10 }], // Adjust based on your text length
        color: '#fff',
        fontWeight: 'bold',
        // Add more styles as needed
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        borderRadius:5,
        margin:15,
        borderColor:'black',
        borderWidth:3
        // Add more styles as needed
    },
    navBarItem: {
        padding: 10,
        // Add more styles as needed
    },
    reviewBox: {
        padding: 10,
        padding: 15,
        margin: '0 15 15 15',
        color: '#ffffff',
    },
    reviewHeader: {
        flexDirection: 'row',
        color: '#ffffff',
    },
    userProfilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
        color: '#ffffff',
    },
    reviewDate: {
        color: '#ffffff',
    },
    reviewContent: {
        color: '#ffffff',
    },
    reviewRating: {
        color: '#ffffff',
    },
    rateInput: {
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        padding: 10,
        color: '#ffffff',
        margin:15
    },
    submitButton: {
        backgroundColor: '#CADBFC', // Adjust color as needed
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        margin: 15,
    },
    submitButtonText:{    color: 'black', // Adjust color as needed
    fontSize: 16,
    fontWeight: 'bold',},
});

export default BusinessPage;
