import * as React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';

export default function ExploreScreen() {
  return (

      <MapView style={styles.map} 
      region={{
        latitude: 22.62938671242907,
        longitude: 88.4354486029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      }}
      >
      <Marker 
      coordinate={{
        latitude: 22.62938671242907,
        longitude: 88.4354486029795,
      }}
      image ={require('../assets/map-marker.png')}
      title="Beezer Bytes"
      description="FastFood"
      >
        </Marker>
        <Marker 
      coordinate={{
        latitude: 23.62938671242907,
        longitude: 87.4354486029795,
      }}
      image ={require('../assets/map-marker.png')}
      title="Beezer Bytes"
      description="FastFood"
      >
        </Marker>
      
</MapView>
  );

    };

const styles = StyleSheet.create({

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  marker:
  {
    width:30,
    height:30
  },
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});