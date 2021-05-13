import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';
import styles from './styles';
import SwiperComponent from '../../components/Swiper';


export default function Detail() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: '65%' }}>
          <Text style={styles.house}>Casa de praia</Text>
        </View>

        <View style={{ width: '35%' }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Ionicons name="md-star" size={24} style={styles.myStarStyle} />}
              emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />}
              halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle} />}
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>R$ 1.204,90</Text>
      <Text style={styles.description}>Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.</Text>
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={{ paddingHorizontal: 15, marginTop: 35 }}>
        <View style={styles.slide}>
          <Image 
          source={require('../../assets/house5.jpg')}
          style={{width:90, height:90, borderRadius:8}}
          />

        </View>

        <View style={styles.slide}>
          <Image 
          source={require('../../assets/house4.jpg')}
          style={{width:90, height:90, borderRadius:8}}
          />

        </View>

        <View style={styles.slide}>
          <Image 
          source={require('../../assets/house3.jpg')}
          style={{width:90, height:90, borderRadius:8}}
          />

        </View>
      </ScrollView>
    </ScrollView>
  );
}
