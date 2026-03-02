import { StyleSheet, Text, View, StatusBar, Pressable, Image, FlatList } from 'react-native'
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
      <View
        style={{
          flex: 8,
          height: 30,
          borderBottomWidth: 1,
          padding: theme.spacing.card,
        }}
      >
          <Text style={styles.header}>My Series</Text>
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
      <View>
        
      <FlatList 
      data ={comics}
        keyExtractor={(comic) => comic.id}
        renderItem={({item})=> (
          <View style={{
            marginTop: 40,
          }}>
            <ComicCard 
              key={item.id} 
              id={item.id} 
              thumb= {item.thumb} 
              title={item.title} 
              episode={item.episode} 
              notif={item.notif}/>
          </View>

        )}
      />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {

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
    lineheight: 30,
    fontSize: 20,
    margin: 10,
  },
})
