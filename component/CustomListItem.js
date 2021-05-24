import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Avatar,ListItem} from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
const CustomListItem = ({id,name,enterName}) => {
    const [chatMessages, setChatMessages] = useState("");
    useEffect(() => {
       const unsubscribe= firestore().collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=> setChatMessages(snapshot.docs.map((doc)=>doc.data()))
       
       )
       return unsubscribe;
    } );
    return (
     <ListItem key={id} onPress={()=>enterName(id,name)} key={id} bottomDivider>
         <Avatar
         rounded
         source={
             {
                 uri:"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
             }
         }
         />
         <ListItem.Content>
             <ListItem.Title style={{fontWeight:"bold"}}>
                {name}

             </ListItem.Title>
             <ListItem.Subtitle
             numberOfLines={1} ellipsizeMode="tail"
             
             >
              {chatMessages?.[0]?.message}

             </ListItem.Subtitle>
         </ListItem.Content>
     </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
