import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Avatar,ListItem} from "react-native-elements";
const CustomListItem = ({id,name,enterName}) => {
    return (
     <ListItem onPress={()=>enterName(id,name)} key={id} bottomDivider>
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
                 This is sample text

             </ListItem.Subtitle>
         </ListItem.Content>
     </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
