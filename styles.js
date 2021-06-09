import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding:5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: 'ghostwhite',
    ...Platform.select({
      ios: {paddingTop:20},
      android: {paddingTop:StatusBar.currentHeight}
    })
  },
  box: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    margin:5,
  },
  boxText: {
    fontSize:20,
    fontWeight:"bold",
    color: "darkslategray",
  },
  headerText: {
    fontSize:20,
    fontWeight:"bold",
    color: "darkslategray",
    paddingLeft: 10,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin:5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin:5,
  },
  firstbox: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    margin:20,
    padding:5
  },
  secondbox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    margin:20,
    padding:5
  },
  mainbox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    margin:10,
    padding:10

  }

});

export default styles;