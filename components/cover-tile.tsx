import React from "react";
import { Image, StyleSheet, View } from "react-native";

type imgProp = {
  image: string;
};

const CoverTile = ({ image }: imgProp) => {
  return (
    <View style={styles.box}>
      <Image source={{ uri: image }} style={styles.boxImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginLeft: 10,
    marginRight: 10,
  },
  boxImage: {
    height: 140,
    width: 110,
  },
});

export default CoverTile;
