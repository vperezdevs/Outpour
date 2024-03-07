import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //all containers here
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  containerBis: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "#ffffff",
  },
  containerEB: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "white",
  },
  containerUR: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
  },

  //for App.js & shared styles

  scrollView: {
    flexGrow: 0,
    backgroundColor: "#1E1E1E",
  },
  scrollView2: {
    alignItems: "center",
    marginTop: 40,
  },
  box: {
    width: 400,
    height: 150,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "25%",
    fontWeight: "bold",
    color: "white",
  },
  button_blue: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "200%",
    fontWeight: "bold",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#AAC6FD",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  button_red: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "200%",
    fontWeight: "bold",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#FF8A8A",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  button_field: {
    marginTop: "30%",
    alignContent: "center",
  },
  title_red: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FF8A8A",
  },
  title_blue: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#AAC6FD",
  },
  logo: {
    width: 300,
    height: 110,
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
  },
  input_red: {
    backgroundColor: "#fcfdff",
    borderWidth: 3,
    borderColor: "#FF8A8A",
    borderRadius: 5,
    padding: 5,
  },
  input_blue: {
    backgroundColor: "#fcfdff",
    borderWidth: 3,
    borderColor: "#75A1F5",
    borderRadius: 5,
    padding: 5,
  },
  inputLabelLoggedOut: {
    color: "#FFF",
    fontSize: 20, // Changed from "12px" to 12
    marginTop: 10, // Changed from "10px" to 10
  },

  //for Signup.js
  titleSU: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fcfdff",
    marginBottom: 40,
  },
  submitButtonSU: {
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#75A1F5",
    backgroundColor: "#f1f1f1",
    padding: 5,
    marginTop: 5,
  },
  submitButtonTextSU: {
    fontSize: 16,
    fontWeight: "bold",
  },

  //for Home.js

  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fcfdff",
  },
  viewAllText: {
    fontSize: 16,
    color: "red",
  },
  reviewLocation: {
    fontSize: 12, // Small font size
    color: "grey", // Less prominent color
    marginTop: 5, // Space from the review content
  },
  businessBox: {
    width: 200,
    height: 250,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  businessImage: {
    width: 180,
    height: 180,
    backgroundColor: "skyblue",
  },
  businessName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "#fcfdff",
  },
  businessLocation: {
    fontSize: 14,
    color: "grey",
    marginTop: 2,
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  reviewsHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fcfdff",
  },
  reviewBox: {
    width: 300,
    backgroundColor: "#fcfdff",
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  reviewUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  userProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "skyblue",
  },
  userName: {
    fontWeight: "bold",
  },
  reviewDate: {
    fontSize: 12,
    color: "grey",
  },
  reviewContent: {
    fontSize: 14,
  },
  BottomNavBar: {
    paddingTop: 75,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },

 //from Search.js
 searchContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  marginTop: 30,
},
searchInput: {
  width: "100%", // Ensures search bar takes the full width
  height: 40,
  borderColor: "white",
  borderWidth: 1,
  borderRadius: 5,
  color: "white",
  paddingHorizontal: 10,
},
cardContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around", // This helps distribute space around the cards evenly
  padding: 10,
},
card: {
  width: 160, // Fixed width for cards
  height: 250, // Fixed height to ensure consistency
  marginBottom: 10,
  borderRadius: 10,
  overflow: "hidden",
},
cardImage: {
  width: "100%",
  height: "80%", // Makes sure the image covers 80% of the card height
},
cardText: {
  textAlign: "center",
  backgroundColor: "#AAC6FD",
  color: "black",
  height: "20%", // Remaining height for text
},

  //from Profile.js
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 150, // Set your own width
    height: 150, // Set your own height
    borderRadius: 75, // Adjust for roundness
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FF8A8A",
  },
  editProfileButton: {
    marginBottom: 40, // Space between button and links
  },
  editProfileButtonText: {
    color: "white",
    fontSize: 25,
  },
  linksContainer: {
    width: "60%",
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20%", // Space between items
  },
  iconPlaceholder: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: "white", // Placeholder color
    borderWidth: 3,
    borderColor: "#FF8A8A",
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  linkText: {
    color: "#FFF",
    fontSize: "20%",
  },
  button_blue: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "150%",
    fontWeight: "600",
    color: "white",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#AAC6FD",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 15,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  //from EditProfile.js
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    margin: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  labelText: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#75A1F5",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
    color: '#FFFFFF',
  },
  updateButton: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#FF8A8A",
    margin: 40,
    backgroundColor: "black",
  },
  updateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  //for BusinessPage.js & UserBusiness.js
  backLinkBis: {
    marginTop: "15%",
    marginLeft: "5%",
    padding: "1%",
    fontWeight: "bold",
  },
  backLinkTextBis: {
    color: "#FF8A8A",
  },
  bannerImageBis: {
    width: "100%",
    height: 200, // for 30% of the viewport height, adjust the multiplier as needed
    alignSelf: "center", // Center the image
    // ... other styles ...
  },
  businessDetailsContainerBis: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingRight: 50,
    // Add more styles as needed
  },
  ratingTextBis: {
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "30%",
  },
  ratingTextBoxBis: {
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15,
    margin: "5%",
    padding: "2%",
  },
  sliderContainerBis: {
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  sliderBis: {
    width: 300,
    height: 40,
  },
  businessInfoBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessNameBis: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ffffff",
    // Add more styles as needed
  },
  businessNameContainerBis: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartIconBis: {
    marginLeft: 175, // Space between the business name and the heart icon
    padding: 5, // Padding to make the touch area larger
  },

  businessAddressBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  businessRatingBis: {
    // Add more styles as needed
    color: "#ffffff",
  },
  mapPlaceholderBis: {
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    margin: 10,
    // Add more styles as needed
  },
  mapImageBis: {
    width: "100%",
    height: 200,
    // Add more styles as needed
  },
  overlayBis: {
    ...StyleSheet.absoluteFillObject, // Make the overlay fill the entire container
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark color with 50% opacity
  },
  mapTextBis: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -10 }], // Adjust based on your text length
    color: "#fff",
    fontWeight: "bold",
    // Add more styles as needed
  },
  navBarBis: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    margin: 15,
    borderWidth: 5,
    borderColor: "#FF8A8A",
    borderRadius: 15,
    // Add more styles as needed
  },
  navBarItemBis: {
    padding: 10,
    fontSize: "25%",
    // Add more styles as needed
  },
  reviewBoxBis: {
    padding: 20,
    margin: 15,
    color: "#ffffff",
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#AAC6FD",
    backgroundColor: "#242424",
  },
  reviewHeaderBis: {
    flexDirection: "row",
    color: "#ffffff",
  },
  reviewSlidersBis: {
    padding: "5%",
  },
  userProfilePicBis: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userNameBis: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: "30%",
  },
  reviewDateBis: {
    color: "#ffffff",
    fontSize: "15%",
  },
  reviewContentBis: {
    color: "#ffffff",
    paddingBottom: 10,
    paddingTop: 15,
    fontSize: 20,
  },
  reviewRatingBis: {
    color: "#ffffff",
  },
  rateInputBis: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#AAC6FD",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    color: "black",
    margin: 15,
  },
  submitButtonBis: {
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#FF8A8A",
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 15,
    width: "auto",
  },
  submitButtonTextBis: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconPlaceholderBis: {
    width: 30, // Set your own width
    height: 30, // Set your own height
    backgroundColor: "white", // Placeholder color
    borderWidth: 3,
    borderColor: "#AAC6FD",
    borderRadius: 15, // Adjust for roundness
    marginRight: 10, // Space between icon and text
  },
  iconSliderContainerBis: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10,
  },

  //from EditUserBusiness.js

  backButtonEB: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImageEB: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  imageEB: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  inputContainerEB: {
    margin: 20,
  },
  inlineInputContainerEB: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBoxEB: {
    marginBottom: 15,
    flex: 1,
  },
  inlineInputBoxEB: {
    marginLeft: 5,
  },
  labelTextEB: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  inputEB: {
    height: 40,
    borderColor: "#FF8A8A",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
  },
  updateButtonEB: {
    backgroundColor: "#CADBFC",
    padding: 15,
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#AAC6FD",
    backgroundColor: "black",
    margin: 40,
  },
  updateButtonTextEB: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  //for UserBusiness.js

  editBusinessButton: {
    marginLeft: 10,
    backgroundColor: "#f1f1f1",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#AAC6FD",
    marginBottom: 20,
  },
  editBusinessButtonText: {
    color: "black",
    fontSize: 16,
  },

  //for UserAlerts.js
  alertItemUA: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#AAC6FD",
  },
  userProfilePicUA: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  alertContentUA: {
    flex: 1,
    justifyContent: "center",
    color: "#ffffff",
  },
  alertTextUA: {
    fontSize: 14,
    marginBottom: 10,
    color: "#ffffff",
  },
  buttonGroupUA: {
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonTextUA: {
    color: "#ffffff",
  },
  acceptButtonUA: {
    marginRight: 10,
    backgroundColor: "#E95744",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  declineButtonUA: {
    borderColor: "white",
    borderWidth: 1,
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  timestampUA: {
    fontSize: 12,
    color: "grey",
  },

  //for Favorites.js
  cardContainerFav: {
    marginBottom: 50,
  },
  cardFav: {
    margin: 30,
    borderRadius: 2,
    overflow: "hidden",
    borderColor: "#ffffff",
    boxShadow: "rgb(121, 149, 255) 0px 0px 16px 4px",
    position: "relative",
  },
  cardImageFav: {
    width: "100%",
    height: 200,
  },
  cardTextFav: {
    padding: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  heartIconFav: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  //for Friends.js
  friendList: {
    marginBottom: 20,
    padding: 20,
  },
  friendContainer: {
    marginBottom: 15,
    height: 60,
  },
  friendContent: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    borderColor: "#FF8A8A",
    borderWidth: 1,
    backgroundColor: "black",
    padding: 10,
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  friendName: {
    color: "white",
    flex: 1,
    padding: 10,
  },

  //for UserReviews.js
  reviewItemUR: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 3,
    borderBottomColor: "#75A1F5",
    borderRadius: 15,
    padding: "5%",
    paddingBottom: 30,
    paddingLeft: 20,
    marginTop: 10,
  },
  reviewContentUR: {
    flex: 1, // Take up all available space except for what's needed for the button
  },
  establishmentNameUR: {
    fontSize: 16,
    color: "white", // Change color as needed
    marginBottom: 4, // Space between establishment name and review text
    fontWeight: "bold",
  },
  reviewTextUR: {
    fontSize: 12, // Adjust font size as needed
    color: "grey", // Change color as needed
    marginBottom: 10, // Space between review text and bottom of the box
  },
  changeRatingButtonUR: {
    fontFamily: "sans-serif",
    color: "white",
    backgroundColor: "#1a1919", // Change background color as needed
    borderWidth: 3,
    borderColor: "#FF8A8A",
    borderRadius: 15,
    marginTop: 100,
    padding: 10,
  },
  changeRatingButtonTextUR: {
    color: "white",
  },

  //for Settings.js
  inputBoxSet: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 10,
  },
  inputLabelSet: {
    fontSize: 16,
    color: "white",
  },
  logoutIconSet: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  updateButtonSet: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  updateButtonTextSet: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
