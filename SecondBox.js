import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function SecondBox({children}) {
  return (
    <View style = {styles.secondbox}>
      <Text style = {styles.headerText}>Row</Text>
      <View>{children}</View>
    </View>
  )
}
