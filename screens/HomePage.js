import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import cssVariables from "../utilities/cssVariables";
import SearchPlace from "../components/SearchPlace";
import imagePath from "../utilities/imagePath";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Button from "../components/Button";

const HomePage = () => {
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();

  const setCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    dispatch(
      setDestination({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
    );
    navigation.navigate("MapScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.contentHeader}>
          <Text style={styles.headingText}>PARKIFY</Text>
          <View style={styles.profile}></View>
        </View>
        <View style={styles.midContainer}>
          <SearchPlace />
          <View style={styles.HomePageOptions}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MapScreen");
              }}
              disabled={!destination}
              style={[styles.option, !destination ? styles.disabled : null]}
            >
              <Text style={styles.optionText}>
                Choose your parking near destination
              </Text>
              <Image style={styles.optionImage} source={imagePath.map} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyles={{
            button: styles.buttons,
            text: {
              color: cssVariables.primaryWhite,
              marginLeft: cssVariables.marginXSmall,
            },
          }}
          buttonFunction={() => {
            setCurrentLocation();
          }}
          icon={{
            type: "feather",
            iconName: "crosshair",
            color: "#4ECB71",
            size: 16,
          }}
          buttonName={"Your Current Location"}
        />

        <Button
          buttonStyles={{
            button: styles.buttons,
            text: {
              color: cssVariables.primaryWhite,
              marginLeft: cssVariables.marginXSmall,
            },
          }}
          buttonFunction={() => {
            navigation.navigate("ParkingHistory");
          }}
          icon={{
            type: "feather",
            iconName: "clock",
            color: cssVariables.accent,
            size: 16,
          }}
          buttonName={"Your Parking History"}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: cssVariables.dark,
    flex: 1,
    padding: cssVariables.paddingMedium,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  contentHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "Poppin-Light",
    fontSize: cssVariables.textXLarge,
    opacity: 0.5,
    color: cssVariables.primaryWhite,
    letterSpacing: 1,
  },
  profile: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,
  },
  midContainer: {
    marginTop: cssVariables.marginMedium,
  },
  HomePageOptions: {
    marginTop: cssVariables.marginLarge,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  option: {
    width: 164,
    height: 224,
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginRight: cssVariables.marginSmall,
  },
  disabled: {
    opacity: 0.3,
  },
  optionText: {
    color: cssVariables.primaryWhite,
    fontSize: cssVariables.textXMedium,
    width: "100%",
    padding: cssVariables.paddingSmall,
    lineHeight: 32,
    opacity: 0.7,
  },
  optionImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
    top: 0,
    right: 0,
  },
  buttons: {
    width: "100%",
    marginTop: 16,
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    fontFamily: "Poppin-SemiBold",
    backgroundColor: cssVariables.secondaryDark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
