import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Column({children}) {
  return (
    <View style = {styles.column}>
      <Text style = {styles.boxText}>Column</Text>
      <View>{children}</View>
    </View>
  )
}
