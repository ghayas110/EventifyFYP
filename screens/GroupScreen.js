import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../component/AuthProvider';
import ChatScreen from './ChatScreen';
const GroupScreen = ({navigation}) => {
    const [yemail, Yemail] = useState("");
    const [group, setGroup] = useState("");
    const [eemail,setEemail] = useState("");
    const {user} = useContext(AuthContext);
    const createGroup = async()=>{
        await firestore().collection("rooms").add({
           yemail:user.email,
           group:group,
           eemail:eemail
        }).then( ()=>{
           
      console.log('User Updated!');
      Alert.alert(
        'Request Submited Succesfuly',
        'You can go check if event Planner Created Required Group'
      );
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
            placeholder="Event Planner Email" value={eemail} onChangeText={(text)=>setEemail(text)}
            
            leftIcon={
              
            <Ionicons 
              name="user"
              size={25}
              color='black'
              style={{marginTop:10}}
             
            />
            }
            
            />
            
            <Button title="Send Group Request" onPress={createGroup}/>
            <Button title="Go to Chat" onPress={navigation.navigate('ChatScreen')}/>
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
