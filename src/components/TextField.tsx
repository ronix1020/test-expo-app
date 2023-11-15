import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

export const TextField = ({ style, ...props }: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={{
        ...defaultStyles.textField,
        ...(style as Object),
      }}
    />
  );
};

const defaultStyles = StyleSheet.create({
  textField: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 4,
    height: 40,
  },
});
