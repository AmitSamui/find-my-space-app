import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cssVariables from "../utilities/cssVariables";
import SingleGarage from "./SingleGarage";

const GarageList = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.informationText}>Click on markers or GarageList</Text> */}
      <View style={styles.listContainer}>
        <Text style={styles.heading}>Parkings Nearby</Text>
        <View style={styles.lists}>
          <SingleGarage />
          <SingleGarage />
          <SingleGarage />
          <SingleGarage />
          <SingleGarage />
          <SingleGarage />
        </View>
      </View>
    </View>
  );
};

export default GarageList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    backgroundColor: cssVariables.dark,
  },
  informationText: {
    color: cssVariables.primaryWhite,
    opacity: 0.2,
    fontSize: cssVariables.textSmall,
  },
  listContainer: {
    width: "100%",
    height: "100%",
    marginTop: cssVariables.marginSmall,
  },
  heading: {
    fontSize: cssVariables.textMedium,
    color: "white",
    fontFamily: "Poppin-Medium",
    letterSpacing: 0.3,
    marginBottom: cssVariables.marginSmall,
  },
  lists: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
  },
});
