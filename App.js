import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./screens/WelcomePage";
import { useFonts } from "expo-font";
import LoginPage from "./screens/LoginPage";
import Register from "./screens/Register";
import HomePage from "./screens/HomePage";
import Map from "./components/Map";
import MapScreen from "./screens/MapScreen";
import ParkingHistory from "./screens/ParkingHistory";
import { AuthProvider } from "./context/AuthContext";
import Payment from "./screens/Payment";
import CheckedIn from "./screens/CheckedIn";
import CheckedOut from "./screens/CheckedOut";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppin-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppin-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppin-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppin-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppin-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppin-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppin-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
});

  console.log(fontsLoaded);

  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar
              backgroundColor="linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)"
              barStyle="light-content"
            />

            <Stack.Navigator>
            {/* <Stack.Screen
                name="CheckedOut"
                component={CheckedOut}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              />
            <Stack.Screen
                name="CheckedIn"
                component={CheckedIn}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              /> */}
              <Stack.Screen
                name="Welcome"
                component={WelcomePage}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              />

              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  animationTypeForReplace: "pop",
                  animation: "slide_from_right",
                  
                }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{
                  headerShown: false,
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              />
              <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                  headerShown: false,
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                  // animation: "slide_from_right",
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                  animationTypeForReplace: "push",
                  animation: "slide_from_right",
                }}
              />
              <Stack.Screen
                name="ParkingHistory"
                component={ParkingHistory}
                options={{
                  headerShown: false,
                  animationTypeForReplace: "pop",
                  animation: "fade_from_bottom",
                  animationDuration: 1
                }}
              />
              {/* 
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              /> */}
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
