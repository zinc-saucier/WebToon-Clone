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
            flex: 4,
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
          paddingBottom: 20,
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
      <View
        style={{
          flex: 8,
          height: 10,
          borderBottomWidth: 1,
          borderColor: theme.colors.border,
          flexDirection: "row",
          justifyContent: "left",
          padding: theme.spacing.card,
        }}
      >
          <Text style={styles.text}>10 SERIES TOTAL</Text>
          <Text style={styles.text}>4 UNREAD SERIES</Text>
      </View> 
      <View>  
      <ScrollView
      
          style={{
            marginTop: 40,
            
          }}>
            <View>
              <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                <ComicCard 
                  id="1"
                  thumb= {require("@/assets/images/ComicPreview1.png")}
                  title= 'war and peas'
                  episode={2}
                  notif='last read yesterday'
                  />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id="2"
                    thumb= {require("@/assets/images/ComicPreview2.png")}
                    title= 'some comic'
                    episode={2}
                    notif='last read yesterday'
                    />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"3"}
                    thumb= {require("@/assets/images/ComicPreview3.png")}
                    title= {'another comic'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"4"}
                    thumb= {require("@/assets/images/ComicPreview4.png")}
                    title= {'probably gay'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"5"}
                    thumb= {require("@/assets/images/ComicPreview5.png")}
                    title= {'mostly gay'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"6"}
                    thumb= {require("@/assets/images/ComicPreview6.png")}
                    title= {'het slop'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"7"}
                    thumb= {require("@/assets/images/ComicPreview1.png")}
                    title= {'nothing special'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
                </View>
                <View>
                <Pressable onPress={() => router.push("../(tab)/subscribed/comic")}>
                  <ComicCard 
                    id={"8"}
                    thumb= {require("@/assets/images/ComicPreview2.png")}
                    title= {'something special'}
                    episode={2}
                    notif={'last read yesterday'}
                    />
                </Pressable>
              
              </View>
        </ScrollView>
        </View>
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
