import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

interface ListColorsProps {
  colorSelected: string;
  setColorSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ListColors = ({
  colorSelected,
  setColorSelected,
}: ListColorsProps) => {
  const colors = [
    "#F44336",
    "#FF9800",
    "#FFEB3B",
    "#4CAF50",
    "#2196F3",
    "#673AB7",
    "#9C27B0",
    "#E91E63",
    "#795548",
    "#607D8B",
    "#000000",
    "#FFFFFF",
  ];

  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <ScrollView
        horizontal
        style={{
          borderRadius: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setColorSelected(color)}
            style={[styles.buttonColor, { backgroundColor: color }]}
          >
            {colorSelected === color && (
              <Text
                style={[
                  styles.selectedColor,
                  {
                    color: colorSelected === "#FFFFFF" ? "#000000" : "#FFFFFF",
                  },
                ]}
              >
                ✓
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonColor: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedColor: {
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
});
