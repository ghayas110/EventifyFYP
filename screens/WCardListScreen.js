import React,{useState,useEffect} from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import CardItemDetails from './CardItemDetails'
import Card from '../component/Card';
import firestore from '@react-native-firebase/firestore';

const WCardListScreen = ({navigation}) => {
  const [events, setEvent] = useState({});
  
  const getEvents = () => {
    

    firestore().collection("eplanner").where('epcat','==',"Birthday Event" ).onSnapshot(snapshot => (
      setEvent(snapshot.docs.map(doc => (
        {

          //   id:doc.id,
          data: doc.data()
        }
      )))
    ))

  };
  useEffect(() => {
    getEvents();
    // var imageURL = []
    // for (const i in events) {
    //   console.log(events[i].data.id)
    //   projectStorage.ref(`images/${events[i].data.id}`).getDownloadURL().then((url) => imageURL.push({ eventId: events[i].data.id, url: url }))
    // }
    // setimg(imageURL)
  }, []);
  const renderEvents = () => {
    if (events.length > 0) {
      console.log("events", events);
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return events.map((item, index) => {
        var detail = []
        console.log("ï", item)
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item, index) => {
          // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
          return (
<Card 
                 itemData={item}
                 onPress={()=> {navigation.navigate('CardItemDetails' , {itemData: item})}}
             />
            // <EventResults
            //   img={item.postImage}
            //   location={item.location}
            //   title={item.title}
            //   description={item.description}
            //   price={"Rs" + item.price}
            // />
          );
        })
      })
    }
  };
    // const renderItem = ({item}) => {
    //     return (
    //         <Card 
    //             itemData={item}
    //             onPress={()=> {navigation.navigate('CardItemDetails' , {itemData: item})}}
    //         />
    //     );
    // };

    return (
      <View style={styles.container}>
       {
        renderEvents()}
      </View>
    );
};

export default WCardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});