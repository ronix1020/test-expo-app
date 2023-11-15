import React from "react";
import { WritingsInterface } from "../../../interfaces/HomeInterfaces";
import { View, Text, Image, StyleSheet } from "react-native";
import { ColorsApp } from "../../../themes/colors";

interface RenderWritingsProps {
  writings?: WritingsInterface[];
}

export const RenderWritings = ({ writings }: RenderWritingsProps) => {
  if (writings && writings.length > 0) {
    return (
      <View style={styles.container}>
        {writings.map((writing) => {
          return (
            <View key={writing.id} style={styles.subcontainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.title}>{writing.title}</Text>
                <Image
                  source={{ uri: writing.avatar }}
                  style={{
                    ...styles.image,
                    borderColor: writing.backgroundColor,
                  }}
                />
              </View>
              <View>
                <Text>{writing.bodyText}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: ColorsApp[100],
  },
  subcontainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: ColorsApp[50],
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  contentContainer: {
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 20,
    bottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Lato_700Bold",
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 30,
    borderWidth: 2,
  },
});
