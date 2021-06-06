import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import ChildBox from './ChildBox';
import Column from './Column';
import Row from './Row';
import FirstBox from './FirstBox';
import SecondBox from './SecondBox';


export default function App() {
  return (
    <View style={styles.container}>
      <FirstBox>
        <Column>
          <ChildBox>Child</ChildBox>
          <ChildBox>Child</ChildBox>
          <ChildBox>Child</ChildBox>
        </Column>
      </FirstBox>
      <SecondBox>
        <Row>
          <ChildBox>Child</ChildBox>
          <ChildBox>Child</ChildBox>
          <ChildBox>Child</ChildBox>
        </Row>
      </SecondBox>




    </View>
  );
}


