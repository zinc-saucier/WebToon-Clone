import { Text, View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import NavBar from '@/components/nav-bar';

export default function Index() {
  
  return (
    <View
      style={{
        flex: 1,
        paddingTop:StatusBar.currentHeight,
        backgroundColor: '#000',
        minWidth: 400,
        maxWidth: 600
      }}
    >
      <Text></Text>
      <NavBar></NavBar>
    </View>
  );
}
