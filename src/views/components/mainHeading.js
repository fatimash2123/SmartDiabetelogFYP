import React from "react";
import {View,Text,StyleSheet} from "react-native";
import colors from "../../files/Colors";

export const MainHeading=function({heading}){
    return(
        <View style={styles.container}>
            <Text style={styles.heading} >{heading}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
<<<<<<< HEAD
        backgroundColor: "#86C0DD",
=======
        backgroundColor:colors.headingBlue,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
       // height:"12%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    heading:{
        fontSize:30,
<<<<<<< HEAD
        // fontWeight:"bold",
        textAlign:"center",
        textTransform:"capitalize",
        color:"black",
=======
        fontWeight:"bold",
        textAlign:"center",
        textTransform:"capitalize",
        color:colors.darkGreyBlue,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        paddingVertical:7
      
    }
});