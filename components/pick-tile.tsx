import { Image, StyleSheet, View } from "react-native";

const PickTile = ({ text, image }) => {
  return (
    <View style={styles.box}>
      <Image
        source={require("@/assets/images/WebtoonComic1.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {},
  image: {},
});

export default PickTile;
