import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const details = () => {
  const SearchIcon = <Icon name="search" size={25} color={"#8c8c8c"} />;
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#000",
      }}
    >
      <View>
        <Text style={styles.searchBar}>
          {SearchIcon}{" "}
          <Text style={styles.searchText}>
            Series, creators, categories, and more
          </Text>
        </Text>
        <Pressable onPress={() => router.push("../(tab)/search")}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default details;

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    margin: 10,
  },
  searchBar: {
    backgroundColor: "#3c3c3c",
    borderRadius: 5,
    color: "#8c8c8c",
    fontWeight: "600",
    display: "flex",
    alignContent: "center",
    padding: 5,
    margin: 10,
  },
  searchText: {
    paddingTop: 4,
    paddingLeft: 5,
  },
  cancelText: {
    color: "#8c8c8c",
  },
  subheader: {
    color: "white",
    margin: 10,
    fontWeight: "600",
  },
  categoryTiles: {
    display: "flex",
    flexDirection: "row",
  },
  coverTiles: {
    display: "flex",
  },
});
