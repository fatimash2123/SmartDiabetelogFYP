import {View,Button,Text,StyleSheet} from "react-native";

import { Registeration } from "./src/views/screens/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/views/screens/LoginScreen";
import Home from "./src/views/screens/Home";
import React,{ useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./src/views/screens/Loading";
import TrackerScreen from "./src/views/screens/TrackerScreen";
import ViewBloodSugar from "./src/views/screens/ViewBloodSugar";
import AddBloodSugar from "./src/views/screens/AddBloodSugar";
import AddBloodPressure from "./src/views/screens/AddBloodPressure";
import ViewBloodPressure from "./src/views/screens/ViewBloodPressure";
import ViewCholesterol from "./src/views/screens/ViewCholesterol";
import AddCholesterol from "./src/views/screens/AddCholesterol";
import DietChartMain from "./src/views/screens/DietChartMain";
import SnacksPage from "./src/views/screens/SnacksPage";
import LunchPage from "./src/views/screens/LunchPage";
import DinnerPage from "./src/views/screens/DinnerPage";
import BreakfastPage from "./src/views/screens/BreakfastPage";
import AddMeal from "./src/views/screens/AddMeal";
const Stack = createNativeStackNavigator();

export default function App(){

  const [isloggedIn,setLogged]=useState(null)

  useEffect( ()=>{
    const token= AsyncStorage.getItem("token")
    if(token){
      setLogged(true)
    }
    else{
      setLogged(false)
    }
  })

  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Registration" component={Registeration} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tracker" component={TrackerScreen} />
        <Stack.Screen name="ViewBloodSugar" component={ViewBloodSugar} />
        <Stack.Screen name="AddBloodSugar" component={AddBloodSugar} />
        <Stack.Screen name="ViewBloodPressure" component={ViewBloodPressure} />
        <Stack.Screen name="AddBloodPressure" component={AddBloodPressure} />
        <Stack.Screen name="ViewCholesterol" component={ViewCholesterol} />
        <Stack.Screen name="AddCholesterol" component={AddCholesterol} />
        <Stack.Screen name="Diet" component={DietChartMain} />
        <Stack.Screen name="Snacks" component={SnacksPage} />
        <Stack.Screen name="Lunch" component={LunchPage} />
        <Stack.Screen name="Dinner" component={DinnerPage} />
        <Stack.Screen name="Breakfast" component={BreakfastPage} />
        <Stack.Screen name="AddMeal" component={AddMeal} />
        {/* {
          isloggedIn===null ? 
          (
          <Stack.Screen name="Loading" component={Loading} />
          )
          :isloggedIn===true ?
          (
          <Stack.Screen name="Home" component={Home} />
          )
          :
          (
          <>
          <Stack.Screen name="Registration" component={Registeration} />
          <Stack.Screen name="Login" component={LoginScreen} />
          </>
          )
        }       */}
      </Stack.Navigator>
    </NavigationContainer> 
  )

}

 const styles=StyleSheet.create({
  
});


