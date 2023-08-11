import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cssVariables from "../utilities/cssVariables";
import { Icon } from "@rneui/base";

const SingleGarage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>SILVASA Parking Lot</Text>
        <View style={[styles.infos]}>
          {/* <Icon
        type="font-awesome"
        name="money"
        color="green"
        size={10}
      /> */}
          <Text style={styles.headingText}>Rs 40.55 / hr</Text>
        </View>
      </View>
      <View style={styles.infos}>
        <View style={[styles.infos]}>
          <Icon
            type="font-awesome"
            name="car"
            color={cssVariables.accent}
            size={10}
          />
          <Text style={styles.slot}>15 Slots available</Text>
        </View>
        <View style={[styles.infos]}>
          <Icon
            type="font-awesome"
            name="map-marker"
            color={cssVariables.red}
            size={14}
          />
          <Text style={styles.slot}>0.5 km . 2 min away</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleGarage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: cssVariables.secondaryDark,
    padding: cssVariables.paddingSmall,
    marginBottom: cssVariables.marginSmall,
    borderRadius: 8,
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: cssVariables.marginXSmall,
  },
  headingText: {
    fontSize: cssVariables.textMedium,
    fontFamily: "Poppin-Medium",
    color: cssVariables.primaryWhite,
    marginLeft: cssVariables.marginXSmall,
    lineHeight: 20,
  },
  infos: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  slot: {
    fontSize: cssVariables.textXSmall,
    fontFamily: "Poppin-Regular",
    color: cssVariables.primaryWhite,
    marginLeft: cssVariables.marginXSmall,
  },
});
