import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {block} from 'react-native-reanimated';
import GroupScreen from './GroupScreen';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
const CardItemDetails = ({route,navigation}) => {
  const itemData = route.params.itemData;

  return (
    <View style={styles.container}>
      <TriggeringView>
        <View>
          <Image source={{uri: itemData.postImage}} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.epname}</Text>
          </View>
          <View style={styles.navTitleView}>
            <Text style={styles.navTitle}>{itemData.epname}</Text>
          </View>
          <View style={styles.titles}>
            <Text style={styles.title}>Overview</Text>
          </View>
        </View>
      </TriggeringView>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text style={styles.sectionContent}>{itemData.description}</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <TouchableOpacity style={styles.commandButton} onPress={()=>navigation.navigate(GroupScreen)}>
          <Text style={styles.panelButtonTitle}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CardItemDetails;
const styles = StyleSheet.create({
  titles: {
    padding: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
    shadowColor: '#0000',
    opacity: 0.7,
  },
  commandButton: {
    padding: 15,
    width:"90%",
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 10,
    position: 'absolute',
    zIndex: 1,
    alignItems:"center"
    // marginTop: '90%',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 24,
    marginBottom: 100,
    fontWeight: 'bold',
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
    marginTop: -34,
  },
  navTitle: {
    color: 'black',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    
     minHeight: 220,
  },
});
