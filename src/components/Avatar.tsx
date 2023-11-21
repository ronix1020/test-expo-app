import React from "react";
import {
  View,
  Image,
  Text,
  ImageStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";

interface AvatarProps {
  title?: string;
  avatar: string;
  style?: ImageStyle;
  containerStyle?: ViewStyle;
}

export const Avatar = ({
  title,
  avatar,
  style,
  containerStyle,
}: AvatarProps) => {
  return (
    <View style={[containerStyle]}>
      <Image
        source={{
          uri: avatar,
        }}
        style={[defaultStyles.avatar, style]}
      />
      <Text style={[defaultStyles.title]}>{title}</Text>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
  },
});
