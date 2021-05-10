// import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'
import SplashScreen from '../screens/SplashScreen'
import MyTabs from '../screens/Maintabscreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createStackNavigator()
function Main() {
    return (
        
            <SafeAreaProvider>
              <NavigationContainer>
                <>
                  <Stack.Navigator initialRouteName='splashScreen'> 
                    <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
                  
                   <Stack.Screen name='MainTabScreen' component={MyTabs} options={{ headerShown: false }} />
                  </Stack.Navigator>
                </>
              </NavigationContainer>
            </SafeAreaProvider>
          )
        }
    


export default Main
