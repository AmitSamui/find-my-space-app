import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "../utilities/imagePath";
import { useNavigation } from "@react-navigation/native";
import cssVariables from "../utilities/cssVariables";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={{ fontFamily: "Poppin-Light", fontSize: 40 }}>
          PARKIFY
        </Text>
        <View style={[styles.center]}>
          <Image style={styles.parkifyLogo} source={imagePath.parkifyLogo} />
          <Text style={styles.caption}>
            Unlock the Perfect Spot: Your on-demand parking companion.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={styles.login}
          >
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
            style={styles.register}
          >
            <Text>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.welcomeImage} source={imagePath.welcomeVector} />
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 82,
    width: "100%",
  },
  welcomeImage: {
    width: "200%",
    resizeMode: "contain",
    position: "absolute",
    bottom: "-70%",
    left: "-50%",
    zIndex: -1,
  },
  parkifyLogo: {
    height: 36,
    width: 36,
  },
  caption: {
    fontFamily: "Poppin-Medium",
    fontSize: cssVariables.textSmall,
    opacity: 0.5,
    textAlign: "center",
    maxWidth: "80%",
    marginTop: cssVariables.marginSmall,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  login: {
    width: "80%",
    marginTop: 40,
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    borderColor: "#000",
    borderWidth: 1.2,
    borderRadius: 12,
    fontSize: cssVariables.textMedium,
    fontFamily: "Poppin-SemiBold",
  },
  register: {
    width: "80%",
    marginTop: cssVariables.marginSmall,
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    borderRadius: 12,
    fontSize: cssVariables.textMedium,
    fontFamily: "Poppin-SemiBold",
    backgroundColor: "#D9D9D9",
  },
});
