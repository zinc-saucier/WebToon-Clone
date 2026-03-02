import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type TileProps = {
  text: string;
  image: any;
};

const PicksTile = ({ text, image }: TileProps) => {
  return (
    <View>
      <Image source={image} style={styles.boxImage} />
      <Text style={styles.boxText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    height: 150,
    width: 100,
  },
  boxText: {
    color: "green",
    fontSize: 10,
    fontWeight: 600,
  },
});

export default PicksTile;
