// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

//  import React, { useEffect } from 'react';
//  import { View, ActivityIndicator } from 'react-native';
//  import { 
//    NavigationContainer, 
//    DefaultTheme as NavigationDefaultTheme,
//    DarkTheme as NavigationDarkTheme
//  } from '@react-navigation/native';
//  import { createDrawerNavigator } from '@react-navigation/drawer';
 

 
 
 
//  import MainTabScreen from './screens/Maintabscreen';

 
//  import { AuthContext } from './component/context';
 
//  import RootStackScreen from './screens/RootStackScreen';
 
//  import AsyncStorage from '@react-native-community/async-storage';
// import Main from './component/Main';
 
//  const Drawer = createDrawerNavigator();
 
//  const App = () => {
//    // const [isLoading, setIsLoading] = React.useState(true);
//    // const [userToken, setUserToken] = React.useState(null); 
 
  
 
//    const initialLoginState = {
//      isLoading: true,
//      userName: null,
//      userToken: null,
//    };
 
 
//    const loginReducer = (prevState, action) => {
//      switch( action.type ) {
//        case 'RETRIEVE_TOKEN': 
//          return {
//            ...prevState,
//            userToken: action.token,
//            isLoading: false,
//          };
//        case 'LOGIN': 
//          return {
//            ...prevState,
//            userName: action.id,
//            userToken: action.token,
//            isLoading: false,
//          };
//        case 'LOGOUT': 
//          return {
//            ...prevState,
//            userName: null,
//            userToken: null,
//            isLoading: false,
//          };
//        case 'REGISTER': 
//          return {
//            ...prevState,
//            userName: action.id,
//            userToken: action.token,
//            isLoading: false,
//          };
//      }
//    };
 
//    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
 
//    const authContext = React.useMemo(() => ({
//      signIn: async(foundUser) => {
//        // setUserToken('fgkj');
//        // setIsLoading(false);
//        const userToken = String(foundUser[0].userToken);
//        const userName = foundUser[0].username;
       
//        try {
//          await AsyncStorage.setItem('userToken', userToken);
//        } catch(e) {
//          console.log(e);
//        }
//        // console.log('user token: ', userToken);
//        dispatch({ type: 'LOGIN', id: userName, token: userToken });
//      },
//      signOut: async() => {
//        // setUserToken(null);
//        // setIsLoading(false);
//        try {
//          await AsyncStorage.removeItem('userToken');
//        } catch(e) {
//          console.log(e);
//        }
//        dispatch({ type: 'LOGOUT' });
//      },
//      signUp: () => {
//        // setUserToken('fgkj');
//        // setIsLoading(false);
//      },
//      toggleTheme: () => {
//        setIsDarkTheme( isDarkTheme => !isDarkTheme );
//      }
//    }), []);
 
//    useEffect(() => {
//      setTimeout(async() => {
//        // setIsLoading(false);
//        let userToken;
//        userToken = null;
//        try {
//          userToken = await AsyncStorage.getItem('userToken');
//        } catch(e) {
//          console.log(e);
//        }
//        // console.log('user token: ', userToken);
//        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
//      }, 1000);
//    }, []);
 
//    if( loginState.isLoading ) {
//      return(
//        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//          <ActivityIndicator size="large"/>
//        </View>
//      );
//    }
//    return (
  
//      <AuthContext.Provider value={authContext}>
//      <Main/>
//      </AuthContext.Provider>
   
//    );
//  }
 
//  export default App;

import React from 'react';
import Providers from './component';


const App = () => {
  return <Providers/>
}

export default App;