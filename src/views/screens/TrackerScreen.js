import React from "react";
import {View,Image,Text, Button,SafeAreaView,StatusBar,ScrollView,StyleSheet, TouchableOpacity} from "react-native"
import colors from "../../files/Colors";
import generalStyles from "../../files/generalStyle";
import Card from "../components/cards";
<<<<<<< HEAD
import Menu from "../components/Menu";
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00

export default function TrackerScreen({navigation}){
    return(
        <SafeAreaView style={generalStyles.container}>
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Image 
<<<<<<< HEAD
                 source={require("../../../assets/Images/trackerHead.jpg")} 
=======
                 source={require("../../files/Images/TrackerImage.png")} 
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                style={styles.trackerImage} resizeMode="contain"/>
                <Text style={styles.titleHeading}>Tracker</Text>
              
            </View>

            <ScrollView style={styles.scroll}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewBloodSugar")
                }
                    }>
<<<<<<< HEAD
                    <Card style={styles.card} title="Blood Sugar" imageSource={require("../../../assets/Images/bloogsugar.jpg")} />
=======
                    <Card style={styles.card} title="Blood Sugar"  />
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewBloodPressure")
                }}>
<<<<<<< HEAD
                    <Card style={styles.card} title="Blood Pressure" imageSource={require("../../../assets/Images/bloodPressure.jpg")}/>
=======
                    <Card style={styles.card} title="Blood Pressure" color="#A1A497"/>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("ViewCholesterol")
                }}>
<<<<<<< HEAD
                    <Card style={styles.card} title="Cholesterol" imageSource={require("../../../assets/Images/cholestrol.jpg")}/>
=======
                    <Card style={styles.card} title="Cholesterol" color="#DDBEA9"/>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                </TouchableOpacity>
            </ScrollView>

        </View>
<<<<<<< HEAD
        <Menu/>
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    container:{
<<<<<<< HEAD
        // height:"100%",
        // width:"100%",
        flex:1,
        backgroundColor: "white"
    },
    titleContainer:{
        height:"25%",
=======
        height:"100%",
        width:"100%"
    },
    titleContainer:{
        height:"20%",
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
<<<<<<< HEAD

=======
        backgroundColor:colors.blue2,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        borderRadius:50
    },
trackerImage:{
    width:"100%",
<<<<<<< HEAD
    height:"80%", 

    alignSelf: "center"
 
},
titleHeading:{
    
    // fontSize:60,
    // fontWeight:"bold",
    // color:colors.darkGreyBlue,
    // alignSelf:"center",
    // position:"relative",
    fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: "bold",
        color: 'black',
        margin: 15

=======
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
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
 

},
scroll:{
    height:"80%",
    width:"100%",
},
card:{
    
}
})

