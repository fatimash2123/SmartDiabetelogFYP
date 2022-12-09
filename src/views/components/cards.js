import React, { useState } from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import colors from "../../files/Colors";



const Card=({title,imageSource,color})=>{

    
    const source=imageSource;
    return(
<<<<<<< HEAD
        <View style={[styles.cardView]}>
            <Image style={[styles.image]} source={imageSource} resizeMode="contain"></Image>
=======
        <View style={[styles.cardView,{backgroundColor:color?color:colors.l2blue}]}>
            <Image style={[styles.image]} source={require("../../files/Images/BloodSugar.png")} resizeMode="contain"></Image>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
            <Text style={styles.text} >{title}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    cardView:{
        flex:1,
        flexDirection:"column",
<<<<<<< HEAD
        borderColor:'#86C0DD',
=======
        borderColor:colors.blue4,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        borderWidth:2,
        height:150,
        width:"100%",
        marginTop:10,
        marginBottom:10
    },
    image:{
        height:"80%",
        width:"100%"
    },

    text:{
        fontWeight:"bold",
        fontSize:20,
        color:colors.darkGreyBlue,
        textAlign:"center",
        height:"20%",
        width:"100%"
    }
 

});


export default Card;