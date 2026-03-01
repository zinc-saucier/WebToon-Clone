// for subscribed and drill down comic/episode full width tiles
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";


type ComicProps = {
    thumb?: React.ReactNode;
    title: string;
    episode?: string;
    notif: string;
    right?: React.ReactNode;
};
// React.ReactNode is a TypeScript type that means: "anything React can render."
export default function ComicCard({ thumb, title, episode, notif, right }: ComicProps) {
  return (
    <View style={styles.card}>
        {thumb ? <View>{thumb}</View> : null}
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        {episode ? <Text style={styles.episode}>{episode}</Text> : null}
        {notif ? <Text style={styles.notif}>{notif}</Text> : null}
      </View>
      {right ? <View>{right}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    //borderRadius: theme.radius.card,
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
});
