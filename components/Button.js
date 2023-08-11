import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const Button = ({ buttonStyles, buttonFunction, icon, buttonName }) => {
  return (
    <TouchableOpacity onPress={buttonFunction} style={buttonStyles.button}>
      {icon && (
        <Icon
          type={icon.type}
          name={icon.iconName}
          color={icon.color}
          size={icon.size}
        />
      )}
      <Text style={buttonStyles.text}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
