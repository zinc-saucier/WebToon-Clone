import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SearchIcon = <Icon name="search" size={30} color={"#8c8c8c"} />;
const UserIcon = <Icon name="user" size={30} color={"#8c8c8c"} />;
const HomeIcon = <Icon name="home" size={30} color={"#8c8c8c"} />;
const WatchIcon = <Icon name="youtube" size={30} color={"#8c8c8c"} />;
const CanvasIcon = <Icon name="layout" size={30} color={"#8c8c8c"} />;

const router = useRouter();

const NavBar = () => {
  return (
    <View style={styles.container}>
      <div style={styles.buttons}>
        <Text
          style={styles.button}
          onPress={() => router.navigate("/(tab)/home")}
        >
          {HomeIcon}
          HOME
        </Text>
        <Text style={styles.button}>
          {WatchIcon}
          WATCH
        </Text>
        <Text
          style={styles.button}
          onPress={() => router.navigate("/(tab)/search")}
        >
          {SearchIcon}
          SEARCH
        </Text>
        <Text
          style={styles.button}
          onPress={() => router.navigate("/(tab)/home")}
        >
          {CanvasIcon}
          CANVAS
        </Text>
        <Text
          style={styles.button}
          onPress={() => router.navigate("/(tab)/subscribed")}
        >
          {UserIcon}
          MY
        </Text>
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column-reverse",
  },
  buttons: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "gray",
  },
});

export default NavBar;
