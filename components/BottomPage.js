import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cssVariables from "../utilities/cssVariables";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GarageList from "./GarageList";
import GarageDetails from "./GarageDetails";

const Stack = createNativeStackNavigator();

const BottomPage = () => {
  return (
    <View style={styles.container}>
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
  );
};

export default BottomPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: cssVariables.paddingSmall,
  },
});
