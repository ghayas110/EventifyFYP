import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../component/CustomListItem'
import Chat from "./Chat";
import firestore from '@react-native-firebase/firestore';
const ChatScreen = ({navigation}) => {
  const [rooms, setRooms] = useState([]);
useEffect(() => {
  const unsubscribe =  firestore().collection("rooms").onSnapshot(snapshot=>(
    setRooms(snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    })))
  ))
  return unsubscribe;
}, [navigation]);

const enterName=(id,name)=>{
  navigation.navigate("Chat",{id,name})
}

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {rooms.map(({id,data:{name}})=>(
          <CustomListItem key={id} id={id} name={name} enterName={enterName}/>
          ))}
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container:{
    height:"100%",
  },
})
