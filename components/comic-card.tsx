// for subscribed and drill down comic/episode full width tiles
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import { theme } from "../styles/theme";
import { comics, ComicProps } from "@/data/comics";



// React.ReactNode is a TypeScript type that means: "anything React can render."
const ComicCard = ({id, thumb, title, episode, notif}: ComicProps) => {
  return (
    <ScrollView style={styles.container}>
        {
            comics.map((comic)=> (
                <View key={id} style={styles.card}>
                    <Image source={{ uri: thumb }} style={styles.comicTile}/>
                    
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.episode}>{episode}</Text>
                    <Text style={styles.notif}>{notif}</Text>
                </View>
            ))

        }    
         </ScrollView>
       //insert button/pressable here
    );
}
export default ComicCard

const styles = StyleSheet.create({
    container: {

    },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.gap,
  },
  textWrap: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
  },
  episode: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.text,
  },
  notif: {
    marginTop: 4,
    fontSize: 12,
    color: theme.colors.text,
  },
  comicTile: {
    height: 100,
    width: 100,
  },
});
