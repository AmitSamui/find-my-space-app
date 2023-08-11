import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectDestination } from "../slices/navSlice";
import mapStyle from "../assets/mapStyle.json";
import imagePath from "../utilities/imagePath";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import cssVariables from "../utilities/cssVariables";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    // very important part to notice ----- vvvvvvimp
    setTimeout(() => {
      mapRef.current.fitToElements([destination, "marker"], {
        edgePadding: { top: 200, bottom: 200, left: 200, right: 200 },
        animated: "true",
      });
    }, 500);
  }, []);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={{
        width: "100%",
        height: "100%",
      }}
      initialRegion={{
        latitude: destination?.latitude,
        longitude: destination?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      customMapStyle={mapStyle}
    >
      <MapViewDirections
        origin={{
          latitude: destination.latitude,
          longitude: destination.longitude,
        }}
        destination={{
          latitude: 19.007416,
          longitude: 73.095219,
        }}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeColor={cssVariables.accent}
        strokeWidth={2}
      />
      {destination && (
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          image={imagePath.destinationMarker}
          title="destination"
          identifier="destination"
          anchor={{
            x: 0.5,
            y: 0.5,
          }}
        />
      )}

      <Marker
        coordinate={{
          latitude: 19.007416,
          longitude: 73.095219,
        }}
        onPress={() => {
          navigation.navigate("GarageDetails");
        }}
        image={imagePath.garageMarker}
        title="marker"
        identifier="marker"
        anchor={{
          x: 0.5,
          y: 0.9,
        }}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
