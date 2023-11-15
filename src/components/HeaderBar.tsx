import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewStyle,
  StyleSheet,
  TextStyle,
  ImageStyle,
} from "react-native";
import { ColorsApp } from "../themes/colors";

interface HeaderBarProps {
  title?: string;
  avatar?: string;
  renderLeftComponent?: React.ReactNode;
  renderRightComponent?: React.ReactNode;
  headerBarStyle?: ViewStyle;
  titleStyle?: TextStyle;
  avatarContainerStyle?: ViewStyle;
  avatarStyle?: ImageStyle;
  onPressAvatar?: () => void;
}

export const HeaderBar = ({
  title,
  avatar,
  headerBarStyle,
  renderLeftComponent,
  renderRightComponent,
  titleStyle,
  avatarStyle,
  avatarContainerStyle,
  onPressAvatar = () => {},
}: HeaderBarProps) => {
  return (
    <View
      style={{
        ...defaultStyles.container,
        ...headerBarStyle,
      }}
    >
      {renderLeftComponent && renderLeftComponent}
      {title && (
        <Text
          style={{
            ...defaultStyles.title,
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      )}
      {avatar && (
        <TouchableOpacity
          style={{
            ...defaultStyles.avatarContainer,
            ...avatarContainerStyle,
          }}
          onPress={onPressAvatar}
        >
          <Image
            source={{ uri: avatar }}
            style={{
              ...defaultStyles.avatarStyle,
              ...avatarStyle,
            }}
          />
        </TouchableOpacity>
      )}
      {renderRightComponent && renderRightComponent}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: ColorsApp[100],
  },
  title: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
  },
  avatarContainer: {
    marginLeft: "auto",
    marginRight: 10,
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
