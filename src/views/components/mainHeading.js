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
        backgroundColor:colors.headingBlue,
       // height:"12%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        textTransform:"capitalize",
        color:colors.darkGreyBlue,
        paddingVertical:7
      
    }
});