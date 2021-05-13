import React from 'react';
import { View,Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
export default function SwiperComponent() {
 return (
   <Swiper
   styles={styles.wrapper}
  dotStyle={{
    backgroundColoer:'#000',
    borderColor:'#000',
    borderWidth:1,
    width:10,
    height:10,
    borderRadius:10
  }}
  activeDotColor="#FFF"
  activeDotStyle={{
    borderColor:'#000',
    borderWidth:1,
    width:10,
    height:10,
    borderRadius:10,
  }}
  autoplay={true}
   >
     <View style={styles.slide}>
    <Image
      source={require('../../assets/house1.jpg')}
      style={{width:'100%', height:400}}
    />
     </View>

     <View style={styles.slide}>
    <Image
      source={require('../../assets/house2.jpg')}
      style={{width:'100%', height:400}}
    />
     </View>

     <View style={styles.slide}>
    <Image
      source={require('../../assets/house3.jpg')}
      style={{width:'100%', height:400}}
    />
     </View>
   </Swiper>
  );
}