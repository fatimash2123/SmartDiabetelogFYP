import React from "react";
import {View,Image,Text, Button,SafeAreaView,StatusBar,ScrollView,StyleSheet, TouchableOpacity} from "react-native"
import colors from "../../files/Colors";
import generalStyles from "../../files/generalStyle";
import Card from "../components/cards";

export default function TrackerScreen({navigation}){
    return(
        <SafeAreaView style={generalStyles.container}>
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Image 
                 source={require("../../files/Images/TrackerImage.png")} 
                style={styles.trackerImage} resizeMode="contain"/>
                <Text style={styles.titleHeading}>Tracker</Text>
              
            </View>

            <ScrollView style={styles.scroll}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewBloodSugar")
                }
                    }>
                    <Card style={styles.card} title="Blood Sugar"  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewBloodPressure")
                }}>
                    <Card style={styles.card} title="Blood Pressure" color="#A1A497"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewCholesterol")
                }}>
                    <Card style={styles.card} title="Cholesterol" color="#DDBEA9"/>
                </TouchableOpacity>
            </ScrollView>

        </View>
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    container:{
        height:"100%",
        width:"100%"
    },
    titleContainer:{
        height:"20%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        backgroundColor:colors.blue2,
        borderRadius:50
    },
trackerImage:{
    width:"100%",
    height:"100%", 
    zIndex:1,
    opacity:0.5,
    position:"relative",
    top:"10%"
},
titleHeading:{
    
    zIndex:10,
    fontSize:60,
    fontWeight:"bold",
    color:colors.darkGreyBlue,
    alignSelf:"center",
    position:"relative",
    bottom:"45%"
 

},
scroll:{
    height:"80%",
    width:"100%",
},
card:{
    
}
})

