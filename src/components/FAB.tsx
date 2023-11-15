import React from "react";
import {
  TouchableOpacity,
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { ColorsApp } from "../themes/colors";

interface FABProps {
  title: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  onPress: () => void;
}

export const FAB = ({ title, titleStyle, buttonStyle, onPress }: FABProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...defaultStyles.button,
        ...buttonStyle,
      }}
    >
      <Text
        style={{
          ...defaultStyles.title,
          ...titleStyle,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: ColorsApp[100],
    position: "absolute",
    bottom: 60,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: ColorsApp[200],
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: ColorsApp[400],
  },
});
