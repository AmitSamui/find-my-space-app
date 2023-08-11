import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "../utilities/imagePath";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import cssVariables from "../utilities/cssVariables";
import * as ImagePicker from "expo-image-picker";
import { Icon } from "@rneui/base";

const Register = () => {
  const [email, onChangeEmail] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [address, onChangeAddress] = React.useState("");
  const [numberPlate, onChangeNumberPlate] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.headingText}>Hello!</Text>
              <Text style={[styles.subText]}>
                Enter your details to Continue
              </Text>
            </View>
            {/* <TouchableOpacity onPress={pickImage}>
                <Text>upload</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={pickImage}
              style={styles.uploadBtnContainer}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <Icon
                  type="font-awesome"
                  name="user-plus"
                  color={cssVariables.primaryBlack}
                  size={16}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", marginTop: 36 }}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Your Name"
              />
            </View>
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
                onChangeText={onChangePhoneNumber}
                value={phoneNumber}
                placeholder="Your Phone Number"
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeAddress}
                value={address}
                placeholder="Your Address"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumberPlate}
                value={numberPlate}
                placeholder="Your number plate ID"
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

      <TouchableOpacity style={[styles.registerButton]}>
        <Text style={{ color: "#fff", fontSize: 16 }}>REGISTER</Text>
      </TouchableOpacity>

      {/* <Image style={styles.welcomeImage} source={imagePath.welcomeVector} /> */}
    </SafeAreaView>
  );
};

export default Register;

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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  uploadBtnContainer: {
    height: 75,
    width: 75,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    overflow: "hidden",
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
  subText: {
    fontFamily: "Poppin-Medium",
    opacity: 0.5,
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
  registerButton: {
    width: "100%",
    marginBottom: cssVariables.marginMedium,
    marginTop: cssVariables.marginMedium,
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    borderRadius: 12,
    fontSize: cssVariables.textMedium,
    color: "red",
    fontFamily: "Poppin-SemiBold",
    backgroundColor: "#000",
  },
  welcomeImage: {
    position: "absolute",
    width: "210%",
    resizeMode: "contain",
    bottom: "-73.5%",
    left: "-60%",
    zIndex: -1,
    opacity: 0.5,
  },
});
