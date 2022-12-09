import path from "path";
import React,{useState, useEffect} from "react";
import {View,Button,Text,StyleSheet, SafeAreaView, ScrollView, Keyboard, Alert, TouchableOpacity,Image, TextInput} from "react-native";
import { Input } from "../components/input";
import colors from "../../files/Colors";
import { MyButton } from "../components/button";
import { MainHeading } from "../components/mainHeading";
import Loader from "../components/loader";
import generalStyles from "../../files/generalStyle";
import PageHeading from "../components/PageHeading";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { title } from "process";

import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";



export default function EnterCode({props, navigation}){
  const [time, setTime] = React.useState(60);
  const timerRef = React.useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

return(
<SafeAreaView style={styles.container}>
    <Text style={styles.heading}>Enter recieved code:</Text>
    <View style={styles.codeBox}>
        <TextInput style={styles.codeItem} maxLength={1} keyboardType = 'numeric'></TextInput>
        <TextInput style={styles.codeItem} maxLength={1} keyboardType = 'numeric'></TextInput>
        <TextInput style={styles.codeItem} maxLength={1} keyboardType = 'numeric'></TextInput>
        <TextInput style={styles.codeItem} maxLength={1} keyboardType = 'numeric'></TextInput>
    </View>
    <View style={styles.timmer}>
      <Text style={styles.timmerText}> {time} seconds </Text>
    </View>
    <MyButton title="Done"/>
    </SafeAreaView>
)
};

 const styles=StyleSheet.create({
  container:{  
      flex:1,
      paddingTop: 30,
      backgroundColor:"white",
  },
  heading:{
    fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: "bold",
        color: 'black',
        marginBottom: 15,
        marginTop: 10
  },
  codeBox:{
    flex:0.2,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    margin: 20,
    justifyContent:'space-evenly',

  },
  codeItem:{
    // backgroundColor: 'lightgrey',
    width: 50,
    height: 80,
    fontSize: 30,
    color: 'black',
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 2,

  },
  timmer:{
    // backgroundColor: 'red'
  },
  timmerText:{
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }

  
});


