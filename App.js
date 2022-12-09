<<<<<<< HEAD
import {View,Button,Text,StyleSheet, ImageComponent} from "react-native";
=======
import {View,Button,Text,StyleSheet} from "react-native";
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00

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
<<<<<<< HEAD
import FirstScreen from "./src/views/screens/FirstScreen";
import MedicationMain from "./src/views/screens/MedicationMain";
import OralMed from "./src/views/screens/OralMed";
import AddOralMedicine from "./src/views/screens/AddOralMedicine";
import InsulinMed from "./src/views/screens/InsulinMed";
import AddInsulinMedicine from "./src/views/screens/AddInsulinMed";
import AllergicReactionMain from "./src/views/screens/AllergicReactionMain";
import DietFirstMain from "./src/views/screens/DietFirstMain";
import AddMedicineAllergicReactions from "./src/views/screens/AddMedicineAllergicReactions";
import MedicineAllergicReactions from "./src/views/screens/MedicineAllergicReactions";
import AddFoodAllergicReactions from "./src/views/screens/AddFoodAllergicReactions";
import FoodAllergicReactions from "./src/views/screens/FoodAllergicReaction";
import HomeScreen from "./src/views/screens/HomeScreen";
import ForgetPassword from "./src/views/screens/ForgetPassword";
import EnterCode from "./src/views/screens/EnterCode";
import Retinopathy from "./src/views/screens/Retinopathy";
import Profile from "./src/views/screens/Profile";
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
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
<<<<<<< HEAD
     
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
=======
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
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
<<<<<<< HEAD
        <Stack.Screen name="MedicationMain" component={MedicationMain}/>
        <Stack.Screen name="OralMed" component={OralMed}/>
        <Stack.Screen name="AddOralMedicine" component={AddOralMedicine}/>
        <Stack.Screen name="InsulinMed" component={InsulinMed}/>
        <Stack.Screen name="AddInsulinMedicine" component={AddInsulinMedicine}/>
        <Stack.Screen name="AllergicReactionMain" component={AllergicReactionMain}/>
        <Stack.Screen name="DietFirstMain" component={DietFirstMain}/>
        <Stack.Screen name="AddMedicineAllergicReactions" component={AddMedicineAllergicReactions}/>
        <Stack.Screen name="MedicineAllergicReactions" component={MedicineAllergicReactions}/>
        <Stack.Screen name="AddFoodAllergicReactions" component={AddFoodAllergicReactions}/>
        <Stack.Screen name="FoodAllergicReactions" component={FoodAllergicReactions}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name="EnterCode" component={EnterCode}/>
        <Stack.Screen name="Retinopathy" component={Retinopathy}/>
        <Stack.Screen name="Profile" component={Profile}/>

=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
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


