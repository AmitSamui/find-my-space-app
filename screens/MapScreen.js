import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../components/Map";
import cssVariables from "../utilities/cssVariables";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GarageDetails from "../components/GarageDetails";
import GarageList from "../components/GarageList";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapSection}>
        <Map />
      </View>
      <View style={styles.bottom}>
        <Stack.Navigator>
          <Stack.Screen
            name="GarageList"
            component={GarageList}
            options={{
              headerShown: false,
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="GarageDetails"
            component={GarageDetails}
            options={{
              headerShown: false,
              animationTypeForReplace: "push",
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  mapSection: {
    width: "100%",
    height: "60%",
  },
  bottom: {
    height: "45%",
    width: "100%",
    backgroundColor: cssVariables.dark,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    overflow: "hidden",
    elevation: 24,
  },
});
