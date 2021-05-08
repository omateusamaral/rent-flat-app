import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './styles';

export default function New(props) {
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={props.cover}
            style={styles.cover}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.dot}>
            </View>
            <Text style={styles.badge}>Novo</Text>
          </View>
          <Text style={styles.description}>
            {props.description}
          </Text>
          <View style={styles.footer}>
            <View style={{ width: '80%' }}>
              <Text style={styles.price}>R$ 1.204,90</Text>
            </View>

          </View>
        </TouchableOpacity>

        <Ionicons
        style={{textAlign:'right'}}
          name="information-circle-outline"
          size={24}
          color="#000"
          onPress={props.showInfo}
        />
      </View>

  )
}