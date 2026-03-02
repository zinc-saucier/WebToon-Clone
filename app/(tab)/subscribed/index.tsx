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
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            backgroundColor: theme.colors.bg,
            minWidth: 350,
            maxWidth: "100%",
          }}
        >
    <View>
        <Text style={theme.h1}>My Series</Text>
    <FlatList 
     data ={comics}
      keyExtractor={(comic) => comic.id}
      renderItem={({item})=> (
        <View>
        <ComicCard key={item.id} id={item.id} thumb= {item.thumb} title={item.title} episode={item.episode} notif={item.notif}/>
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
})
