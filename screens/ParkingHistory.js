import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import cssVariables from "../utilities/cssVariables";
import HistoryParking from "../components/HistoryParking";


const ParkingHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.headingText}>Your Parking History</Text>
        <View style={styles.profile}></View>
      </View>
      <View style={styles.parkinglist}>
        <HistoryParking />
        <HistoryParking />
        <HistoryParking />
        <HistoryParking />
        <HistoryParking />
        <HistoryParking />
      </View>
    </SafeAreaView>
  );
};

export default ParkingHistory;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: cssVariables.dark,
    padding: cssVariables.paddingSmall,
  },
  contentHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: cssVariables.marginSmall,
  },
  headingText: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textXMedium,
    opacity: 0.8,
    color: cssVariables.primaryWhite,
    letterSpacing: 1,
  },
  profile: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,
  },
  parkinglist: {
    width: "100%",
    height: "auto",
    marginTop: cssVariables.marginLarge,
  },
});
