import React from "react";
import {View,Text,StyleSheet, SafeAreaView, Image,TouchableOpacity} from "react-native";


export default function FirstScreen({navigation}){
    const LoginOpen= ()=>{
        navigation.navigate('Login');
    }
    const RegisterOpen= ()=>{
        navigation.navigate('Registration');
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
          <Image style={styles.image} source={require("../../../assets/Images/firstPic.jpg")}/>
          <Text style={styles.heading}>Smart Diabetolog</Text>
          
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={RegisterOpen}><Text style={styles.buttonText}>Register</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={LoginOpen}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
          </View>
          <Text style={styles.smallText}>Let's fight diabetes together!</Text>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    image:{
        width: "100%",
        height:"30%",
        alignSelf: "center"
    },
    heading:{
        fontSize: 40,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 85,
        fontWeight: "bold",
        color: 'black',
    },

    button:{
        flex:1,
        backgroundColor: "#86C0DD",
        width: 300,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        alignSelf: "center"
        
    },
    buttonText:{
        fontSize: 20,
        color: "white",
        textAlign:"center",
        textAlignVertical: "center",
        // paddingTop: 10
    },
    buttonView:{
        flex:0.4,
        flexDirection: "column",
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    smallText:{
        // flex: 0.3,
        // marginRight: 55,
        fontStyle: "italic",
        justifyContent: "center",
        bottom: 15,
        position:'absolute',
        textAlign: "center",
        width:'100%',
        fontSize: 20




    }
    
});