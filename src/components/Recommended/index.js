import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

export default function Recommended({ cover, offer, house }) {
  return (
    <ImageBackground
      source={cover}
      style={
        [
          styles.container,
          styles.shadow
        ]
      }
      blurRadius={3}
    >
      <Text
        style={
          [styles.house,
          styles.shadow
          ]
        }>{house}</Text>
      <Text
        style={
          [
            styles.off,
            styles.shadow
          ]
        }
      >
        {offer}
      </Text>
    </ImageBackground>
  );
}