import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, setDestination } from "../slices/navSlice";
import { Icon } from "@rneui/themed";
import cssVariables from "../utilities/cssVariables";

const SearchPlace = () => {
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Icon
        type="feather"
        name="map-pin"
        color={cssVariables.red}
        style={styles.icon}
        size={16}
      />
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            width: "95%",
            marginLeft: cssVariables.marginXSmall,
            paddingRight: cssVariables.paddingXSmall,
          },
          textInput: {
            fontSize: cssVariables.textSmall,
            backgroundColor: cssVariables.dark,
            borderBottomColor: cssVariables.primaryWhite,
            borderBottomWidth: 1,
            color: cssVariables.primaryWhite,
          },
          row: {
            backgroundColor: cssVariables.secondaryDark,
          },
          description: {
            color: cssVariables.primaryWhite,
          },
        }}
        textInputProps={{
          placeholderTextColor: cssVariables.primaryWhite,
        }}
        enablePoweredByContainer={false}
        placeholder="Where From?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          dispatch(
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            })
          );
        }}
        returnKeyType={"search"}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
          type: "geocode",
        }}
      />
    </View>
  );
};

export default SearchPlace;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginTop: cssVariables.marginSmall,
  },
});
