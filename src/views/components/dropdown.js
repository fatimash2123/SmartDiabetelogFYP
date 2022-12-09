<<<<<<< HEAD
import { PromiseProvider } from "mongoose";
import React from "react";
import {useState} from "react";
=======
import React from "react";
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
import {View,SafeAreaView,Text,StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import colors from "../../files/Colors";

<<<<<<< HEAD
export default function MyDropDown({dropdownlist,title, selection}){
    
=======
export default function MyDropDown({dropdownlist,title}){
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    return(
        <SafeAreaView style={styles.container}>
            <Text  style={styles.text}> {title}</Text>
            <SelectDropdown
            style={styles.dropdown}
            data={dropdownlist} 
            onSelect={(selectedItem,index)=>{
<<<<<<< HEAD
                // console.log(selectedItem,index)
                selection(selectedItem);
=======
                console.log(selectedItem,index)
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
            }}

            buttonTextAfterSelection={(selectedItem,index)=>{
                return selectedItem;
<<<<<<< HEAD

=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
            }}
            rowTextForSelection={(selectedItem,index)=>{
                return selectedItem;
            }}

<<<<<<< HEAD
            buttonStyle={{borderWidth:1,color:"red",width:"100%", backgroundColor:'#86C0DD',height:50}}
=======
            buttonStyle={{borderWidth:1,color:"red",width:"100%", backgroundColor:colors.headingBlue,height:50}}
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
           
            buttonTextStyle={
                {
                fontSize:14,
                color:colors.darkGreyBlue,
                textTransform:"capitalize",
                fontWeight:"bold"}
            }
            defaultButtonText="Select an Event"
            
            dropdownIconPosition="right"
            dropdownStyle={{backgroundColor:"white"}}
            rowStyle={{backgroundColor:colors.blue3,margin:4}}
            rowTextStyle={{color:colors.greyBlue}}
           
            >
           
            </SelectDropdown>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{},
    text:{
        marginVertical:5,
<<<<<<< HEAD
        marginHorizontal:5,
       
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                fontSize:14,
                color:colors.greyBlue,
                textTransform:"capitalize",
                fontWeight:"bold"
    },
    dropdown:{
        width:"100%",
<<<<<<< HEAD
        
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    }

});