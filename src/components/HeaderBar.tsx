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
  ColorValue,
} from "react-native";
import { ColorsApp } from "../themes/colors";
import { useNavigation } from "@react-navigation/native";
import { ArrowBack } from "../../assets/svg/SvgIcons";

interface HeaderBarProps {
  title?: string;
  avatar?: string;
  backIcon?: boolean;
  renderLeftComponent?: React.ReactNode;
  renderRightComponent?: React.ReactNode;
  headerBarStyle?: ViewStyle;
  titleStyle?: TextStyle;
  avatarContainerStyle?: ViewStyle;
  avatarStyle?: ImageStyle;
  backgroundColor?: ColorValue;
  onPressAvatar?: () => void;
}

export const HeaderBar = ({
  title,
  avatar,
  backIcon,
  headerBarStyle,
  renderLeftComponent,
  renderRightComponent,
  titleStyle,
  avatarStyle,
  avatarContainerStyle,
  backgroundColor,
  onPressAvatar = () => {},
}: HeaderBarProps) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        ...defaultStyles.container,
        backgroundColor: backgroundColor || 'white',
        ...headerBarStyle,
      }}
    >
      {backIcon && (
        <TouchableOpacity
        onPress={() => goBack() }
        style={{
          marginRight: 10,
        }}
        >
          <ArrowBack width={24} />
        </TouchableOpacity>
      )}
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
