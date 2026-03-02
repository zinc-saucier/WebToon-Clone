import { StyleSheet, Text, View, StatusBar, Pressable, ScrollView } from 'react-native'

import {theme} from "../../../styles/theme";
import CoverTile from '@/components/cover-tile';
import EpCard from '@/components/ep-card';

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
                alignContent: "center",
              }}
        >
        <CoverTile image={require("@/assets/images/CoverImage1.png")} />
        </View>
        <View>
        <Text style={styles.text}>50 Views </Text>
        <Text style={styles.header}>Some Comic About People</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex 
          temporibus autem deserunt asperiores explicabo aliquid deleniti at vero tempora recusandae. 
          Itaque, quo labore. Beatae quod similique explicabo quaerat qui accusamus voluptatem. Saepe 
          nulla porro magni voluptate delectus quae? Voluptate, eligendi mollitia. Minus corporis nostrum 
          velit fuga debitis sed. Eligendi nam consequuntur fugit, possimus id, sint culpa ratione aut 
          alias.</Text>
         </View>
      
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
        }}
      >
        <Text style={styles.text}>Episodes</Text>
        <Text style={styles.text}>Readers Also Like</Text>
      </View>
      <View>
        <ScrollView
          style={{
            marginTop: 40,
          }}
        >
          <View>
            
              <EpCard
                id="1"
                thumb={require("@/assets/images/ComicPreview1.png")}
                title="Episode 1"
                
                notif="3 weeks ago"
              />
            
          </View>
          <View>
            
              <EpCard
                id="2"
                thumb={require("@/assets/images/ComicPreview2.png")}
                title="Episode 2"
                
                notif="2 weeks ago"
              />
            
          </View>
          <View>
            
              <EpCard
                id={"3"}
                thumb={require("@/assets/images/ComicPreview3.png")}
                title="Episode 3"
                
                notif="last week"
              />
           
          </View>
          <View>
         
              <EpCard
                id={"4"}
                thumb={require("@/assets/images/ComicPreview4.png")}
                title={"Episode 4"}
                
                notif="yesterday"
              />
          
          </View>
        </ScrollView>
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