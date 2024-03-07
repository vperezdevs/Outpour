const Friends = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container2}>
        {/* Header with Heading */}
        <View>
          <PageTitle
            title="Friends"
            showBackButton={true}
            backgroundColor="#BE4621"
            navigation={navigation}
          />
        </View>
        <View style={styles.container2}>
          {/* List of Friends */}
          <View style={styles.friendList}>
            {renderFriend("Joana Summit", require("./assets/friend1.jpg"))}
            {renderFriend("Chris Lake", require("./assets/friend2.jpg"))}
            {renderFriend("Max Stelar", require("./assets/friend3.jpg"))}
            {renderFriend("Denniz Cruz", require("./assets/friend4.jpg"))}
            {renderFriend("Davina Guetta", require("./assets/friend5.jpg"))}
          </View>
        </View>
        <BottomNavBar activeLink="Profile" navigation={navigation} />
      </SafeAreaView>
    );
  };
  
  const renderFriend = (name, imageSource) => {
    return (
      <View style={styles.friendContainer}>
        <View style={styles.friendContent}>
          <Image source={imageSource} style={styles.friendImage} />
          <Text style={styles.friendName}>{name}</Text>
        </View>
      </View>
    );
  };
  
  export default Friends;