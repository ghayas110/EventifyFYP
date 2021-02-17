import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

 

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>sidra ghayas hamza zafar</Text> 
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
