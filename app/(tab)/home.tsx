import React from "react";
import { Image, StatusBar, StyleSheet, View, Text } from "react-native";

import {theme} from "../../styles/theme";
import PicksTile from "../../components/picks-tile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: theme.colors.bg,
        minWidth: 400,
        maxWidth: "100%",
      }}
    >
      <Image
        source={require("@/assets/images/WebtoonLogo.png")}
        style={styles.logo}
      />
      <Image
        source={require("@/assets/images/HomeBigImage.png")}
        style={styles.bigImage}
      />
      <Text style={styles.picks}>Top Picks for You</Text>
       <Text style={styles.picks}>Top Picks for You</Text>
      <View style={styles.picksBox}>
        <PicksTile text='3 more free episodes' image={require("@/assets/images/WebtoonComic1.png")}></PicksTile>
        <PicksTile text='Warewolf' image={require("@/assets/images/WebtoonComic2.png")}></PicksTile>
        <PicksTile text='All read' image={require("@/assets/images/WebtoonComic3.png")}></PicksTile>
      </View>
      <View style={styles.picksBox}>
        <PicksTile text='3 more free episodes' image={require("@/assets/images/WebtoonComic3.png")}></PicksTile>
        <PicksTile text='3 more free episodes' image={require("@/assets/images/WebtoonComic2.png")}></PicksTile>
        <PicksTile text='3 more free episodes' image={require("@/assets/images/WebtoonComic1.png")}></PicksTile>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 10,
    height: 40,
    width: 40,
  },
  bigImage: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  picks: {
    fontWeight: '600',
    color: 'white',
    marginTop: 20,
    marginLeft: 25
  },
  picksBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  }
});
