import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen'
const Stack = createStackNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert
} from 'react-native';
import MyTabs from './screens/Maintabscreen';
import React from 'react';

import DrawerContent from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
import SignUpScreen from './screens/SignUpScreen';
import ExploreScreen from './screens/ExploreScreen';
import SigninScreen from './screens/SignInScreen';
import SplashScreen from './screens/SplashScreen';
import ProfileScreen from './screens/Profilescreen';
import Chatbot from './screens/Chatbot';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <View>
    <View style={styles.header}>
      <Text style={{fontSize: 30,margin:20 }}>Chatbot</Text>
    <Chatbot 
    mine 
    text="Salam Ghayas Bhai"

    />
    <Chatbot 
     
    text="ji Bolie"

    />
    <Chatbot 
     mine
     text="Event Book Karana hai"
 
     />
   
</View>
<View style={styles.footer}>
<View style={styles.searchBox}>
        <TextInput 
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex:1,padding:0}}
        />
        <Ionicons name="ios-search" size={20} />
      </View>
</View>
</View>
  //  <ExploreScreen/>
//     <NavigationContainer>
      
//  <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
//     <Drawer.Screen name="Home" component={MyTabs} />
  
//   </Drawer.Navigator> 
//   </NavigationContainer>
  


  )
}
const styles = StyleSheet.create({

})