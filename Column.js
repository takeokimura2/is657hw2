import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Column({children}) {
  return (
    <View style = {styles.column}>{children}</View>
  )
}
