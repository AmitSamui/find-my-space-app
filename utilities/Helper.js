import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

export const currentLocation = async () => {
  console.log("calling");
  const dispatch = useDispatch();
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
  console.log(location.coords);
};
