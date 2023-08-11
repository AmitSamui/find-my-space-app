import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import cssVariables from "../utilities/cssVariables";

const HistoryParking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.carNumber}>MH-401-23</Text>
      <View style={styles.heading}>
        <View style={styles.left}>
          <Icon
            type="font-awesome"
            name="car"
            color={cssVariables.accent}
            size={10}
          />
          <Text style={styles.headingText}>SILVASA Parking Lot</Text>
        </View>

        <View style={[styles.infos]}>
          <Text style={styles.headingText}>Rs 40.55</Text>
        </View>
      </View>
      <View style={styles.infos}>
        <View style={[styles.infos]}>
          <Text style={[styles.slot, { opacity: 0.5 }]}>
            Sec - 17 , pl-8A/9 , Kamothe , NaviMumbai
          </Text>
        </View>
        <View style={[styles.infos]}>
          <Text style={styles.slot}>1hr 25min</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryParking;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: cssVariables.secondaryDark,
    overflow: "hidden",
    marginBottom: cssVariables.marginXSmall,
    borderRadius: 8,
  },
  carNumber: {
    width: "100%",
    marginBottom: cssVariables.marginSmall,
    padding: cssVariables.marginSmall,
    textAlign: "center",
    fontSize: cssVariables.textMedium,
    fontFamily: "Poppin-Medium",
    color: cssVariables.primaryWhite,
    backgroundColor: "#707070",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: cssVariables.marginXSmall,
    paddingLeft: cssVariables.paddingSmall,
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    paddingLeft: cssVariables.paddingXSmall,
    paddingRight: cssVariables.paddingSmall,
    marginBottom: cssVariables.marginXSmall,
  },
  slot: {
    fontSize: cssVariables.textXSmall,
    fontFamily: "Poppin-Regular",
    color: cssVariables.primaryWhite,
  },
});
