import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function MainBox({children}) {
  return (
    <View style = {styles.mainbox}>{children}</View>
  )
}
