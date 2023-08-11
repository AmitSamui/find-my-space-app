import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "../utilities/imagePath";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import cssVariables from "../utilities/cssVariables";

const LoginPage = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView>
        <View>
          <View>
            <Text style={styles.headingText}>Welcome!</Text>
            <Text style={[styles.text]}>Sign in to Continue</Text>
          </View>
          <View style={{ width: "100%", marginTop: 36 }}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Your Email"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Your Password"
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomePage");
        }}
        style={[styles.login]}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>LOGIN</Text>
      </TouchableOpacity>
      {/* <Image style={styles.welcomeImage} source={imagePath.welcomeVector} /> */}
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    padding: cssVariables.paddingSmall,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "start",
    position: "relative",
    backgroundColor: "#fff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  headingText: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textXLarge,
    marginTop: cssVariables.marginMedium,
  },
  text: {
    fontFamily: "Poppin-Medium",
    opacity: 0.5,
    marginLeft: 5,
    letterSpacing: 0.5,
    marginTop: cssVariables.marginXSmall,
  },
  inputView: {
    width: "100%",
    marginTop: cssVariables.marginLarge,
  },
  input: {
    fontFamily: "Poppin-Medium",
    borderBottomWidth: 0.5,
    fontSize: cssVariables.textSmall,
    padding: cssVariables.paddingXSmall,
  },
  login: {
    width: "100%",
    marginBottom: cssVariables.marginMedium,
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    borderRadius: 12,
    fontSize: cssVariables.textMedium,
    color: "red",
    fontFamily: "Poppin-SemiBold",
    backgroundColor: "#000",
  },
  welcomeImage: {
    width: "210%",
    resizeMode: "contain",
    position: "absolute",
    bottom: "-73.5%",
    left: "-60%",
    zIndex: -1,
    opacity: 0.5,
  },
});
