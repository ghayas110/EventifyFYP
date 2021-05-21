import React,{useLayoutEffect,useState,useContext} from 'react'
import { ScrollView,Keyboard,TouchableWithoutFeedback, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import {Avatar} from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../component/AuthProvider';
const Chat = ({navigation,route}) => {
const [input, setInput] = useState("");
const [messages, setMessages] = useState([]);
const {user} = useContext(AuthContext);
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:" Chat",headerBackTitleVisible:false,headerTitleAlign:"left",headerTintColor:"black",headerTitle:()=>(
                <View style={{flexDirection:"row",alignItems:"center"}}>
                  <Avatar
                  rounded
                  source={
                    {
                        uri:"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                    }
                }
                  />
                  <Text style={{marginLeft:10,fontWeight:"bold"}}>{route.params.name}</Text>
      
                </View>
              )
        })

    },[navigation])
const sendMessage=()=>{
Keyboard.dismiss()
firestore().collection("rooms").doc(route.params.id).collection("messages").add({
    timestamp:firestore.FieldValue.serverTimestamp(),
    message:input,
    name:user.email,
})
setInput("")
};
useLayoutEffect(()=>{
    const unsubscribe= firestore().collection("rooms").doc(route.params.id).collection("messages").orderBy("timestamp","asc").onSnapshot((snapshot)=>setMessages(snapshot.docs.map(doc=>({id:doc.id
    ,data:doc.data()
    }))))
return unsubscribe;
},[route]);
    return (
        <SafeAreaView style={{flex:1 ,backgroundColor:"white"}}>
            <StatusBar style="light"/>
            <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={90}>
              <TouchableWithoutFeedback>
                <>
                <ScrollView>
                    {messages.map(({id,data})=>(
                        data.name===user.email ?(
                            <View key={id} style={styles.reciever}>
                                 <Text
                                style={styles.senderText}
                                >
                                    {data.name}
                                </Text>
                                <Text
                                style={styles.recieverText}
                                >
                                    {data.message}
                                </Text>
                             

                            </View>
                        ):(
                            <View style={styles.sender}>
                                  <Text
                                style={styles.senderText}
                                >
                                    {data.name}
                                </Text>
                                <Text
                                style={styles.senderText}
                                >
                                    {data.message}
                                </Text>


                            </View>
                        )
                    ))}

                </ScrollView>
                </>
                </TouchableWithoutFeedback>
                <View style={styles.footer}>
                   <TextInput
                   placeholder="Write Something"
                   value={input}
                   onChangeText={(text)=>setInput(text)}
                   onSubmitEditing={sendMessage}
                   style={styles.textInput}
                   />
                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                    <Ionicons 
              name="send"
              size={25}
              color='black'
              style={{marginTop:10}}
             
            />

                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    reciever:{
        padding:15,
        backgroundColor:"yellow",
        alignSelf:'flex-start',
        borderRadius:20,
        margin: 15,
        
        maxWidth:"80%",
        position:"relative"

    },
    recieverText:{
        fontWeight:"bold"

    },
    senderText:{
        fontWeight:"bold"

    },
    sender:{
        padding:15,
        backgroundColor:"#ECECEC",
        alignSelf:'flex-end',
        borderRadius:20,
        marginRight: 15,
        marginBottom:10,
        maxWidth:"50%",
        position:"relative"

    },
    footer:{
        flexDirection:'row',
        alignItems:"center",
        width:"100%",
        padding:15,
        
    },
    textInput:{
        bottom:0,
        height:40,
        flex:1,
        marginRight:15,
      
        backgroundColor:"#ECECEC",
       
        padding:10,
        color:"grey",
        borderRadius:30,
    },
})
