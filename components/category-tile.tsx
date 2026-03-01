import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";


const tiles = [
    {
        text: '',
        image: '',
    }
]

const CategoryTile = () => {
    return (
        <ScrollView>
            {
                tiles.map((tile)=>(
            
        <View style={styles.box}>
            <Text style={styles.boxText}>{tile.text}</Text>
            <div style={styles.imageBox}>
                <Image source={{ uri:tile.image}} style={styles.boxImage}/>
            </div>
        </View>
                ))
        }</ScrollView>
    )
    
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#222222',
        padding: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        borderRadius: 5,
        margin: 3
    },
    boxText: {
        color: 'white',
        
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    boxImage: {
        width: 75,
        height: 65,
        marginTop: 10,

    }
})

export default CategoryTile;