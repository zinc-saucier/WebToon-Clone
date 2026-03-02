import { StyleSheet, Text, View, StatusBar, Pressable, Image, FlatList, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';

import ComicCard from '@/components/comic-card';
import { comics } from '@/data/comics';
import { theme } from "../../../styles/theme";


const router = useRouter();

export default function Index() {
  

  return (
    <View
          style={{
            flex: 3,
            paddingTop: StatusBar.currentHeight,
            backgroundColor: theme.colors.bg,
            minWidth: 350,
            maxWidth: "100%",
          }}
          
    >
      <Text style={styles.header}>My Series</Text>
      <View
        style={{
          flex: 8,
          height: 10,
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
          padding: theme.spacing.card,
        }}
      >
          
      </View>  
      <View
        style={{
          flex: 8,
          height: 40,
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: theme.spacing.card,
        }}
        >
          <Text style={styles.text}>RECENT</Text>
          <Text style={styles.text}>SUBSCRIBED</Text>
          <Text style={styles.text}>DOWNLOADS</Text>
          <Text style={styles.text}>UNLOCKED</Text>
          <Text style={styles.text}>CREATORS</Text>
      </View>
      
        
      <ScrollView
      
          style={{
            marginTop: 40,
            
          }}>
            <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview1.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview2.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview3.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview4.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview5.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview6.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
            <ComicCard 
              id={"1"}
              thumb= {require("@/assets/images/ComicPreview1.png")}
              title= {'war and peas'}
              episode={2}
              notif={'last read yesterday'}
              />
              </Pressable>
          
        </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      marginTop: 40,
    },
    comicThumb: {

    },
    text: {
      color: "white",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 12,
    margin: 10,
    },
    header: {
    color: "white",
    fontWeight: "600",
    lineHeight: 30,
    fontSize: 20,
    margin: 10,
  },
})
