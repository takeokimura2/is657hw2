import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding:20,
    backgroundColor: 'ghostwhite',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    ...Platform.select({
      ios: {paddingTop:20},
      android: {paddingTop:StatusBar.currentHeight}
    })
  },
  box: {
    width: 90,
    height: 75,
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
    //flex: 1,
    //height: 240,
    //width:70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin:10
  },
  row: {
    //flex: 1,
    flexDirection: "row",
    //height: 70,
    //width:240,
    alignItems: "center",
    justifyContent: "flex-start",
    margin:5,
    
  },
  firstbox: {
    flex: 5,
    flexDirection: "column",
    height: 300,
    //width: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    margin:10,
    padding:10
  },
  secondbox: {
    flex: 2,
    flexDirection: "column",
    //height: 100,
    //width: 300,
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