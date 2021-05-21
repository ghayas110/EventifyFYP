import React, {useEffect, useContext, useState} from 'react';
import {
  View,

  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import ChatScreen from './ChatScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native';

const GroupScreen = ({navigation}) => {
    
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [about, setAbout] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
       
    
        firestore().collection("userdata").add(
          {
            fname: fname,
            lname : lname,
            about: about,
            phone: phone,
            location:location,
            timestamp: firestore.FieldValue.serverTimestamp(),
          }
        )
        .then(() => {
      
          console.log('User Updated!');
          Alert.alert(
            'Profile Updated!',
            'Your profile has been updated successfully.',
            setFname(""),
            setLname(""),
            setAbout(""),
            setPhone(""),
            setLocation("")
        
            
          );
        })
          
    
      
    
      
    
    
      }
    return (
        <View>
             <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            name="fname"
            onChange={(e)=>setFname(e.target.value)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            name="lname"
            onChange={(e)=>setLname(e.target.value)}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            name="about"
            onChange={(e)=>setAbout(e.target.value)}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            name="phone"
            onChange={(e)=>setPhone(e.target.value)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="Location"
            placeholderTextColor="#666666"
            autoCorrect={false}
            name="location"
            onChange={(e)=>setLocation(e.target.value)}
            style={styles.textInput}
          />
        </View>
        
        <Button title="Update" onPress={()=>navigation.navigate(ChatScreen)} />
        </View>
    )
}

export default GroupScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
});
