import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function FirstBox({children}) {
  return (
    <View style = {styles.firstbox}>{children}</View>
  )
}
