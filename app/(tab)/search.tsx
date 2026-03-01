import CategoryTile from "../../components/category-tile";
import CoverTile from "../../components/cover-tile";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchIcon = <Icon name="search" size={25} color={"#8c8c8c"} />;

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#000",
        minWidth: 400,
        maxWidth: 600,
      }}
    >
      <Text style={styles.header}>Search</Text>

      <Text style={styles.searchBar}>
        {SearchIcon}{" "}
        <Text style={styles.searchText}>
          Series, creators, categories, and more
        </Text>
      </Text>

      <Text style={styles.subheader}>What Everyone's Searching</Text>

      <Text style={styles.subheader}>Browse Categories</Text>

      <div style={styles.categoryTiles}>
        <CategoryTile
          text="Original Rankings"
          image={require("@/assets/images/ComicPreview1.png")}
        />
        <CategoryTile
          text="CANVAS Rankings"
          image={require("@/assets/images/ComicPreview2.png")}
        />
      </div>
      <div style={styles.categoryTiles}>
        <CategoryTile
          text="New Releases"
          image={require("@/assets/images/ComicPreview3.png")}
        />
        <CategoryTile
          text="Daily"
          image={require("@/assets/images/ComicPreview4.png")}
        />
      </div>
      <div style={styles.categoryTiles}>
        <CategoryTile
          text="US Originals"
          image={require("@/assets/images/ComicPreview5.png")}
        />
        <CategoryTile
          text="Video Episodes"
          image={require("@/assets/images/ComicPreview6.png")}
        />
      </div>
      <div style={styles.categoryTiles}>
        <CategoryTile
          text="Graphic Novels"
          image={require("@/assets/images/ComicPreview1.png")}
        />
        <CategoryTile
          text="Action"
          image={require("@/assets/images/ComicPreview1.png")}
        />
      </div>
    </View>
  );
};

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

export default index;
