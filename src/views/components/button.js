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
<<<<<<< HEAD
    touchOpacity:{ 
        // backgroundColor: "#86C0DD",
        // width:"100%",
        // height:40,
        // alignSelf:"center",
        // justifyContent:"center",
        // alignItems:"center",
        // marginVertical:15
        backgroundColor: "#86C0DD",
        width: 300,
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        alignSelf: "center"

    },
    text:{
        fontSize: 15,
        color: "white",
        textAlign:"center",
        textAlignVertical: "center",
        padding: 5,
        fontWeight: "bold"
=======
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
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        
    }
})