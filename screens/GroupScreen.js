import React,{useState,useContext} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../component/AuthProvider';
import ChatScreen from "./ChatScreen"
const GroupScreen = ({navigation}) => {
 
  const [group, setGroup] = useState("");
  const [eemail,setEemail] = useState("");
  const {user} = useContext(AuthContext);

    const createChat = async()=>{
      await firestore().collection("group").add({
        yemail:user.email,
        group:group,
        eemail:eemail

        }).then( ()=>{
          Alert.alert(
            'Request Sended',
            'Please Wait while your group has been Created'
          );
            navigation.navigate("ChatScreen")
        }
        ).catch((error)=>alert(error));
    }
    return (
        <View style={styles.container}>
                  <Input
            placeholder="Enter Group Name" value={group} onChangeText={(text)=>setGroup(text)}
            
            leftIcon={
              
            <Ionicons 
              name="chatbubbles"
              size={25}
              color='black'
              style={{marginTop:10}}
             
            />
            }
            
            />
             <Input
            placeholder="Enter EventPlanner Email" value={eemail} onChangeText={(text)=>setEemail(text)}
            
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

export default GroupScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20,
        height:"100%"

    }
})
