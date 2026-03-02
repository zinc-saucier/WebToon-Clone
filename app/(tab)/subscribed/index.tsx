import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import { theme } from "../../../styles/theme";

import ComicCard from "@/components/comic-card";

const router = useRouter();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: theme.colors.bg,
        minWidth: 400,
        maxWidth: "100%",
      }}
    >
      <View>
        <Text style={theme.h1}>My Series</Text>
        <ScrollView style={styles.container}>
          {/* <Pressable onPress={() => router.push("../(tab)/settings/profile")}> */}
          <ComicCard
            id={1}
            thumb="https://www.webtoons.com/en/canvas/war-and-peas/list?title_no=63305"
            title={""}
            episode={2}
            notif={""}
          />

          {/* </Pressable> */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  comicThumb: {},
});
