import React from 'react'
import { Text, View, StyleSheet,StatusBar, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen =({navigation})=> {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Animatable.Image 
                  animation="bounceIn"
                  duraton="1500"
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="stretch"
              />
          </View>
            <View style= {styles.footer}>
             <Text style= {styles.title}>Want to Plan an Event</Text>   
             <Text style= {styles.stitle}>We Eventify are here to Help You</Text>
             <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#F99B4E', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </View>
            </View>
        );
    };
export default SplashScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor:'#F99B4E'
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:50,
        paddingVertical:30,
    },
    logo:{
        width: 300,
        height: 300

    },
    title:{
        color:"#080808",
        fontSize:30,
        fontWeight:"bold"
     },
     stitle:{
         color:"#8C8686",
         marginTop:5,
     },
     button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})