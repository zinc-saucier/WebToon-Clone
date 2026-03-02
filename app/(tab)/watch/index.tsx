import { StyleSheet, Text, View, StatusBar } from 'react-native'

import {theme} from "../../../styles/theme";

const comic = () => {
  return (
    <View
              style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
                backgroundColor: theme.colors.bg,
                minWidth: 400,
                maxWidth: "100%",
              }}
            >
    
    <View>
      <Text>comic</Text>
    </View>
    </View>
  )
}

export default comic

const styles = StyleSheet.create({})