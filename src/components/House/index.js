import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
export default function House({ cover, price, description }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={cover}
          style={styles.cover}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}