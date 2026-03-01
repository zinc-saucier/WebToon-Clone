import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Index() {
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
      <Text></Text>
    </View>
  );
}
