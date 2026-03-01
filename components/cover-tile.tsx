import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CoverTile = ({image}) => {
    return (
        <View style={styles.box}>
            <Image source={image} style={styles.boxImage}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    box: {
        marginLeft: 10,
        marginRight: 10
    },
    boxImage: {
        height: 140,
        width: 110
    }
})

export default CoverTile;