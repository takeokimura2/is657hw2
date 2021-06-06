import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Row({children}) {
  return (
    <View >
      <View style = {styles.row}>{children}</View>    
    </View>
  )
}
