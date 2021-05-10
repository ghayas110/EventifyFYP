import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, HeaderBackground, HeaderTitle} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from "./Homescreen";
import DetailScreen from "./DetailScreen";
import ProfileScreen from './Profilescreen';
import ExploreScreen from './ExploreScreen';
import { View,TouchableOpacity } from 'react-native';
import {Avatar} from 'react-native-paper';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails'
import EditProfile from './EditProfile';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        style={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:"black",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:"#009387",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }
        }
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:"red",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor:"coral",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="web" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
const DetailStackScreen =({navigation})=> {
    return(
    <DetailStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"#009387",
       
       
          
        }
      }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} options={{headerTitleAlign: 'center',headerTintColor:"white" } } />
    </DetailStack.Navigator>)
    }
    const HomeStackScreen =({navigation})=> {
      return(
      <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"white"  
        }
      }}>
        <HomeStack.Screen name="Home"  component={HomeScreen} options={{title:"Eventify",headerTitleAlign: 'center',headerTintColor:"black",headerLeft:()=>
        <View style={{marginLeft:10}}>
          {/* <MaterialCommunityIcons name="menu" color='black'  size={26} onPress={()=>navigation.openDrawer()}/> */}
          </View>,          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Ionicons 
                name="ios-search"
                size={25}
                color='black'
                style={{marginTop:10}}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 2}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
               source={require('../assets/ghayas.jpg' ) }
               size={40}
 
                />
              </TouchableOpacity>
            </View>
          ),
          
         }}/>
        <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={{title:" Planners",headerTitleAlign: 'center',headerTintColor:"white"}} />
          
          <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={{ headerBackTitleVisible:false,headerTitle:false,headerTransparent:true,headerTintColor:"white",title:" Planners",headerTitleAlign: 'center',headerTintColor:"black" }
        
        }
         />
      </HomeStack.Navigator>
      )
    }
    const ProfileStackScreen =({navigation})=> {
      return(
        <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#000000", // iOS
            elevation: 0, // Android
          },
          headerTintColor: '#000000',
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <MaterialCommunityIcons name="menu" color='black'  size={26} onPress={()=>navigation.openDrawer()}/>
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  name="account-edit"
                  size={25}
                  backgroundColor='#ffff'
                  color='#000000'
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            ),
          }}
        />
        <ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
          }}
          component={EditProfile}
        />
      </ProfileStack.Navigator>
      )
    }