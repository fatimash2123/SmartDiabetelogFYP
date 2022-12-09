import React, { useState } from "react";
import {View,Text,SafeAreaView,StyleSheet, FlatList, Button, TouchableOpacity, ScrollView} from "react-native";
import generalStyles from "../../files/generalStyle";
import { MainHeading } from "../components/mainHeading";
import colors from "../../files/Colors";
import { Input } from "../components/input";
import MyDropDown from "../components/dropdown";
import Picker from "../components/picker";
import { MyButton } from "../components/button";

export default AddBloodSugar=function({navigation}){
    const [mgUnit,setMgUnit]=useState("mg/dl");
    return(
        <SafeAreaView style={generalStyles.container}>
            <MainHeading heading="Add Blood Sugar"/>
            <ScrollView style={[generalStyles.spacing,styles.scroll]} showsVerticalScrollIndicator={false}>

<<<<<<< HEAD
             <Picker pickertitle="Select Time" pickermode="time" textColor='black' buttonColor='#86C0DD'/>
=======
             <Picker pickertitle="Select Time" pickermode="time"/>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00

                <Input label="Blood Sugar Concentration" 
                placeholder="Enter your Blood Sugar"  
               /> 

               
              <View style={{marginBottom:"1%"}}>
                <Text style={styles.text}>Select Concentration Unit</Text>
                <View style={styles.unitContainer}>
               <TouchableOpacity style={[styles.radioContainer]}
               value={mgUnit} onPress={()=>{setMgUnit("mmol/l")}}>
                <View style={[styles.radioButton,{backgroundColor:(mgUnit==="mmol/l")?colors.d2blue:colors.headingBlue}]}>
                    <Text style={[styles.radioCircle]}>O</Text>
                </View>
                <Text style={styles.radioText}>mmol/l</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.radioContainer}
               value={mgUnit}
               onPress={()=>{setMgUnit("mg/dl")}}>
                <View style={[styles.radioButton,{backgroundColor:(mgUnit==="mg/dl")?colors.d2blue:colors.headingBlue}]} >
                    <Text style={styles.radioCircle}>O</Text>
                </View>
                <Text style={styles.radioText}>mg/dl</Text>
               </TouchableOpacity>
               </View>
              </View>

              <MyDropDown dropdownlist={["Before Breakfast","After Breakfast","Before Lunch",
               "After Lunch","Before Dinner","After Dinner","Random"]}
<<<<<<< HEAD
               title="Event" buttonColor='#86C0DD' />
=======
               title="Event" />
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00


               <Input label="Notes" 
                placeholder="Enter a Description" 
                multiline={true} 
               />

               <MyButton title="Save"/>

              

               


            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
   
    scroll:{},
    unitContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        margin:"2%"
    },
    radioContainer:{
        flexDirection:"row"
    },
    radioButton:{
<<<<<<< HEAD
        backgroundColor:'buttonColor',
=======
        backgroundColor:colors.headingBlue,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        width:"20%",
        height:"100%",
        borderRadius:100,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginRight:"5%"
    },
    radioCircle:{
    },
    text:{
    
        fontSize:14,
        color:colors.greyBlue,
        textTransform:"capitalize",
        fontWeight:"bold"
    }

});