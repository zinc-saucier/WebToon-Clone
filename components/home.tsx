import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

export default function Home() {
    const SearchIcon = <Icon name='search' size={20}/>;
  return (
    <View style={styles.container}>
      <Text>SearchIcon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});