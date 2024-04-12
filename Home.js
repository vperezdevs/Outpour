import React, { useEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import BottomNavBar from "./BottomNavBar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import styles from "./styles";

const Home = ({ navigation }) => {
  const [businesses, setBusinesses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [bannerAds, setBannerAds] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0); // New state for tracking the current ad index
  const bannerAdsRef = useRef(null); // New ref for the banner ads ScrollView

  useEffect(() => {
    const fetchBusinessesAndAds = async () => {
      const querySnapshotBusinesses = await getDocs(
        collection(db, "businesses")
      );
      const businessesData = querySnapshotBusinesses.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBusinesses(businessesData);

      const querySnapshotBannerAds = await getDocs(
        collection(db, "bannerAds")
      );
      const bannerAdsData = querySnapshotBannerAds.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerAds(bannerAdsData); 
    };

    const unsubscribeReviews = onSnapshot(
      collection(db, "reviews"),
      (querySnapshot) => {
        const reviewsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const reviewDate = data.reviewDate
            ? data.reviewDate.toDate().toLocaleDateString()
            : ""; 
          return {
            id: doc.id,
            ...data,
            reviewDate, 
          };
        });
        setReviews(reviewsData);
      }
    );

    fetchBusinessesAndAds();


    const interval = setInterval(() => {
      if (bannerAds.length > 0) {
        const nextIndex = (currentAdIndex + 1) % bannerAds.length; 
        setCurrentAdIndex(nextIndex);
        bannerAdsRef.current?.scrollTo({
          x: nextIndex * 400, 
          animated: true,
        });
      }
    }, 5000); 
    return () => {
      unsubscribeReviews(); 
      clearInterval(interval); 
    };
  }, [currentAdIndex, bannerAds.length]); 

  return (
    <View style={styles.container}>

      <ScrollView
        ref={bannerAdsRef} 
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
      >
        {bannerAds.map((ad) => (
          <View key={ad.id} style={styles.box}>
            <Image
              source={{ uri: ad.bannerImage }}
              style={styles.imageStyle}
              resizeMode="stretch"
            />
          </View>
        ))}
      </ScrollView>


      <View style={styles.recommendedHeader}>
        <Text style={styles.recommendedText}>Recommended for you</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ViewAll")}>
          <Text style={styles.viewAllText}> View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
      >
        {businesses.slice(0, 6).map((business) => (
          <TouchableOpacity
            key={business.id}
            style={styles.businessBox}
            onPress={() =>
              navigation.navigate("BusinessPage", { businessId: business.id })
            }
          >
            <Image
              source={{ uri: business.imageUrl }}
              style={styles.businessImage}
            />
            <Text style={styles.businessName}>{business.name}</Text>
            <Text style={styles.businessLocation}>{business.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.reviewsHeader}>
        <Text style={styles.reviewsHeaderText}>People are saying:</Text>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={true}
      >
        {reviews.map((review) => (
          <TouchableOpacity
            key={review.id}
            onPress={() =>
              navigation.navigate("BusinessPage", { businessId: review.businessId })
            }
          >
            <View style={styles.reviewBox}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewUser}>
                  <Image
                    source={{ uri: review.userProfilePic }}
                    style={styles.userProfilePic}
                  />
                  <Text style={styles.userName}>{review.userName}</Text>
                </View>
                <Text style={styles.reviewDate}>{review.reviewDate}</Text>
              </View>
              <Text style={styles.reviewContent}>{review.reviewContent}</Text>
              <Text style={styles.reviewLocation}>{review.reviewLocation}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNavBar activeLink="Home" navigation={navigation} />
    </View>
  );
};

export default Home;