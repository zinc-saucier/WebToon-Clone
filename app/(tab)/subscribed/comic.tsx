import { StyleSheet, Text, View, StatusBar } from 'react-native'

import {theme} from "../../../styles/theme";
import CoverTile from '@/components/cover-tile';

const comic = () => {
  return (
    <View
              style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
                backgroundColor: theme.colors.bg,
                minWidth: 350,
                maxWidth: "100%",
              }}
            >
    
      <View
        style={{
                flex: 1,
                
                backgroundColor: theme.colors.bg,
                minWidth: 350,
                maxWidth: "100%",
              }}
        >
        <CoverTile image={require("@/assets/images/CoverImage1.png")} />
        <Text style={styles.text}>50 Views </Text>
        <Text style={styles.header}>Some Comic About People</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex 
          temporibus autem deserunt asperiores explicabo aliquid deleniti at vero tempora recusandae. 
          Itaque, quo labore. Beatae quod similique explicabo quaerat qui accusamus voluptatem. Saepe 
          nulla porro magni voluptate delectus quae? Voluptate, eligendi mollitia. Minus corporis nostrum 
          velit fuga debitis sed. Eligendi nam consequuntur fugit, possimus id, sint culpa ratione aut 
          qui quidem facere quis nulla aliquam placeat! Aliquam voluptas ipsa neque impedit omnis autem, 
          fugit magni nobis minima placeat quaerat labore, laborum voluptate nostrum officiis nam suscipit 
          dolores ut fuga. Id incidunt voluptatibus soluta veniam praesentium quo fugiat eius rem tempora 
          alias.</Text>
      </View>
    </View>
  )
}

export default comic

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 10,
  },
  text: {
      color: "white",
    fontWeight: "500",
    lineHeight: 15,
    fontSize: 12,
    margin: 10,
    
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
})