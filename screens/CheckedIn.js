import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import cssVariables from "../utilities/cssVariables";
import { Icon } from "@rneui/base";
import imagePath from "../utilities/imagePath";

const CheckedIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImage}></View>
      <Icon
        type="feather"
        name="check-circle"
        color={cssVariables.green}
        size={18}
        style={styles.icon}
      ></Icon>
      <Text style={styles.checkedInText}>You Have Checked In</Text>
      <View style={styles.parkingLotImageContainer}>
        <Image
          style={styles.parkingLotImage}
          source={imagePath.parkingLotImage}
        />
      </View>
      
      <Text  style={styles.parkingLotName}>
        SILVASA Parking Lot
      </Text>
      <Text style={styles.parkingLotAddress}>
      Sec - 17 , pl-8A/9 , Kamothe , NaviMumbai
      </Text>
      <Text  style={styles.parkingSlotText}>
        Slot No
      </Text>
      <Text  style={styles.parkingSlotNumber}>
        P-24A
      </Text>
      <Text style={styles.copyright}>
        PARKIFY OFFICIAL
      </Text>
    </SafeAreaView>
  );
};

export default CheckedIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: cssVariables.dark,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: cssVariables.paddingSmall,
  },
  profileImage: {
    width: 75,
    height: 75,
    backgroundColor: cssVariables.primaryWhite,
    borderRadius: 100,
    marginTop: cssVariables.marginLarge,
  },
  icon: {
    marginTop: cssVariables.marginLarge,
  },
  checkedInText: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textLarge,
    color: cssVariables.primaryWhite,
    marginTop: cssVariables.marginSmall,
  },
  parkingLotImageContainer: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    borderRadius: 20,
    marginTop: cssVariables.marginLarge,
  },
  parkingLotImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  parkingLotName: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textLarge,
    color: cssVariables.primaryWhite,
    marginTop: cssVariables.marginSmall,
  },
  parkingLotAddress: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textSmall,
    color: cssVariables.primaryWhite,
    marginTop: cssVariables.marginXSmall,
    opacity: 0.4
  },
  parkingSlotText: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textMedium,
    color: cssVariables.primaryWhite,
    marginTop: cssVariables.marginXlarge,
  },
  parkingSlotNumber:{
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textHeading,
    color: cssVariables.primaryWhite,
    color: cssVariables.accent
  },
  copyright:{
    position: "absolute",
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textXSmall,
    color: cssVariables.primaryWhite,
    color: cssVariables.primaryWhite,
    bottom: cssVariables.marginSmall,
    opacity: 0.4
  }
});
