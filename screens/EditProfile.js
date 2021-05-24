import React,{useState,useContext} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../component/AuthProvider';
import ChatScreen from "./ChatScreen"
const EditProfile = ({navigation}) => {
 
  const [fname, setFname] = useState("");
  const [lname,setLname] = useState("");
  const [location,setLocation] = useState("");
  const [phone,setPhone] = useState("");
  const {user} = useContext(AuthContext);

    const updateProfile = async()=>{
      await firestore().collection("userdata").add({
        fname:fname,
        lname:lname,
        location:location,
        phone:phone

        }).then( ()=>{
          Alert.alert(
            'Profile Updated',
            'Profile Updated Succesfully'
          );
          navigation.goBack()
        }
        ).catch((error)=>alert(error));
    }
    return (
        <View style={styles.container}>
                  <Input
            placeholder="First Name" value={fname} onChangeText={(text)=>setFname(text)}
            
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
            placeholder="LastName" value={lname} onChangeText={(text)=>setLname(text)}
            
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
            placeholder="Location" value={location} onChangeText={(text)=>setLocation(text)}
            
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
            placeholder="Phone" value={phone} onChangeText={(text)=>setPhone(text)}
            
            leftIcon={
              
            <Ionicons 
              name="chatbubbles"
              size={25}
              color='black'
              style={{marginTop:10}}
             
            />
            }
            
            />


            <Button title="Update Profile" onPress={updateProfile}/>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:20,
        height:"100%"

    }
})
