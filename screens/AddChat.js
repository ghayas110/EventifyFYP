import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

const AddChat = ({navigation}) => {
    const [roomName, setRoomName] = useState("");

    const createChat = async()=>{
        await firestore().collection("rooms").add({
           name: roomName
        }).then( ()=>{
            navigation.goBack()
        }
        ).catch((error)=>alert(error));
    }
    return (
        <View style={styles.container}>
            <Input
            placeholder="Enter Chat Name" value={roomName} onChangeText={(text)=>setRoomName(text)}
            onSubmitEditing={createChat}
            leftIcon={
              
            <Ionicons 
              name="chatbubbles"
              size={25}
              color='black'
              style={{marginTop:10}}
             
            />
            }
            
            />
            <Button title="Add New Chat" onPress={createChat}/>
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20,
        height:"100%"

    }
})
