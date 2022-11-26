import React from "react";
import {TouchableOpacity,StyleSheet,Text} from "react-native";
import colors from "../../files/Colors";

export const MyButton=( {title, onPress=()=>{}})=>{
    return (
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.5} style={styles.touchOpacity}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    touchOpacity:{ backgroundColor:colors.headingBlue,
    width:"100%",
    height:40,
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:15

    },
    text:{
        color:colors.darkGreyBlue,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:16
        
    }
})