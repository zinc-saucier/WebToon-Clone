// for subscribed and drill down comic/episode full width tiles
import { ScrollView, StyleSheet, Text, View, Image, Touchable } from "react-native";

import { theme } from "../styles/theme";


export type EpProps = {
    id: string;
    thumb: any;
    title: string;
    notif: string;
};


const EpCard = ({id, thumb, title, notif}: EpProps) => {
  return (
    <ScrollView style={styles.container}>
        {
            
                <View key={id} style={styles.card}>
                    <Image source={thumb} style={styles.comicTile}/>
                    <View style={{
                      flex: 3,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    
                    <Text style={styles.title}>{title}</Text>
                    
                    <Text style={styles.notif}>{notif}</Text>
                    </View>
                    <View 
                      style={{
                        flex: 2,
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderColor: theme.colors.border,
                        borderRadius: 10,
                        alignContent: 'center',
                        paddingLeft: 20,
                      }}>
                    
                      <Text style={styles.episode}>Read</Text>
                      
                    </View>
                </View>
          

        }    
         </ScrollView>
       
    );
}
export default EpCard

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.bg,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border

    },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.card,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
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
    height: 55,
    width: 55,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: "row",
    width: '60%',
    height: 20,
    backgroundColor: theme.colors.card,
    marginBottom: 20
  },
});
