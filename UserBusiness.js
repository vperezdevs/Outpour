import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import PageTitle from './PageTitle';

const UserBusiness = ({ navigation }) => {
    // Placeholder data
    const businessDetails = {
        name: 'Business Name',
        address: '123 Business St, City',
        rating: 4.7,
        bannerImage: 'https://via.placeholder.com/400x300',
        mapImage: 'https://via.placeholder.com/400x200?text=Map',
    };

    const reviews = [
        {
            id: 1,
            userName: 'John Doe',
            userProfilePic: 'https://via.placeholder.com/50',
            reviewDate: 'Jan 20, 2024',
            reviewContent: 'Great place, loved the ambiance!',
            rating: 4.5,
        },
        // ... more reviews
    ];

    const [activeSection, setActiveSection] = useState('reviews');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Page Title */}
            <View style={styles.pageTitleContainer}>
                <PageTitle title="My Business" showBackButton={true} backgroundColor="#EB9F05" />
            </View>
            {/* Back link */}
            <TouchableOpacity style={styles.backLink} onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
            {/* Banner Image */}
            <Image source={{ uri: businessDetails.bannerImage }} style={styles.bannerImage} />

            {/* Business Details */}
            <View style={styles.businessDetailsContainer}>
                <View style={styles.businessInfo}>
                    <Text style={styles.businessName}>{businessDetails.name}</Text>
                    <Text style={styles.businessAddress}>{businessDetails.address}</Text>
                </View>
                <Text style={styles.businessRating}>{`${businessDetails.rating} ★`}</Text>
            </View>

            {/* Map Placeholder */}
            <TouchableOpacity style={styles.mapPlaceholder}>
                <Image source={{ uri: businessDetails.mapImage }} style={styles.mapImage} />
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
                <View>
                    {/* Placeholder for rating */}
                    <Text>Rating section coming soon...</Text>
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
                    <Text style={styles.reviewRating}>{`${review.rating} ★`}</Text>
                </View>
            ))}
            </View>
            )}
            {activeSection === 'rate' && (
            <View>
            <TextInput style={styles.rateInput} placeholder="Write your review..." />
            <TextInput style={styles.rateInput} placeholder="Your rating (1-5)" keyboardType="numeric" />
            <Button title="Submit Review" onPress={() => { /* Submit action here */ }} />
            </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backLink: {
        padding: 10,
        // Add more styles as needed
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
    businessInfo: {
        // Add more styles as needed
    },
    businessName: {
        fontWeight: 'bold',
        fontSize: 24,
        // Add more styles as needed
    },
    businessAddress: {
        // Add more styles as needed
    },
    businessRating: {
        // Add more styles as needed
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
        opacity: 0.7,
        // Add more styles as needed
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
        // Add more styles as needed
    },
    navBarItem: {
        padding: 10,
        // Add more styles as needed
    },
    reviewBox: {
        padding: 10,
        // Add more styles as needed
    },
    reviewHeader: {
        flexDirection: 'row',
        // Add more styles as needed
    },
    userProfilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        // Add more styles as needed
    },
    userName: {
        fontWeight: 'bold',
        // Add more styles as needed
    },
    reviewDate: {
        // Add more styles as needed
    },
    reviewContent: {
        // Add more styles as needed
    },
    reviewRating: {
        // Add more styles as needed
    },
    rateInput: {
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10,
        padding: 10,
        // Add more styles as needed
    },
    // Add more styles as needed
});

export default UserBusiness;
