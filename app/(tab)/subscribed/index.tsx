import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import { theme } from "../../../styles/theme";
import { useRouter } from 'expo-router';

import ComicCard from '@/components/comic-card';

const router = useRouter();

export default function Index() {
  

  return (
    <View>
        <Text style={theme.h1}>My Series</Text>
    <ScrollView style={styles.container}>
      
        <Pressable onPress={() => router.push("../(tab)/settings/profile")}>
            <ComicCard
                thumb={<Image source={{ uri: "https://www.webtoons.com/en/canvas/war-and-peas/list?title_no=63305" }} style={styles.comicThumb} />} 
                title={''}
                episode={''}
                notif={''}
                right={<Image
                      source={{ uri: "https://www.webtoons.com/en/canvas/war-and-peas/list?title_no=63305" }}
                      style={styles.comicThumb} />}
                />
                
        </Pressable>
        {/* <Pressable onPress={() => router.push("../(tab)/settings/profile")}>
            <ComicCard
                title="Account"
                subtitle="Update profile settings"
                right={
                <Image
                    source={{uri:"https://www.webtoons.com/en/canvas/war-and-peas/list?title_no=63305"}}
                    style={styles.comicThumb}
                />
            }
            />
        </Pressable> */}
    </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {

    },
    comicThumb: {

    },
})