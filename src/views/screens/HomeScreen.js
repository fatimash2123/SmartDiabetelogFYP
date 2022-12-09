import {React, useState} from "react";
import {View,StyleSheet,SafeAreaView,Text,ScrollView, TouchableOpacity, Image} from "react-native";
import { Input } from "../components/input";
import NewDropDown from "../components/NewDropDown"
import NewPicker from "../components/NewPicker";
import Menu from "../components/Menu";
import * as Progress from 'react-native-progress';
import Drawer from 'react-native-drawer'


export default function HomeScreen({navigation, prop}){
    const [name, setName] = useState('Fatima');
    const [bloodSugar, setBloodSugar]= useState(125);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Hello, {name}</Text>
                <TouchableOpacity style={styles.profileiMAGE} onPress={()=>{navigation.navigate('Profile')}}>
                <Image style={styles.profile} source={require('../../../assets/Images/profile.jpg')}/>
                </TouchableOpacity>
            </View>
            {/* <Image style={styles.graph}  source={require('../../../assets/Images/graph.png')}/> */}

            <View style={styles.graph}>
            {/* <Progress.Pie progress={0.4} size={50} /> */}
            
            <Progress.Circle 
            // indeterminate={true}
            endAngle={0.2}
            indeterminateAnimationDuration={1}
            size={200} 
            showsText={true} 
            progress={15} 
            thickness={8} 
            formatText={()=>'100mg'} 
            style={styles.textStyle} 
            textStyle={{color: 'grey' }}
            allowFontScaling={true}
            unfilledColor={'grey'}
            borderWidth={0}
           
            color={'#DDBEA9'}/>
            {/* <Text style={styles.text}>Blood Sugar Concentration</Text> */}
            </View>
            <View style={{flex:0.15, flexDirection: "row"}}>
                <TouchableOpacity style={[styles.containerBox,{backgroundColor:"#b2e7ed"}]}
                    onPress={()=>{navigation.navigate('AllergicReactionMain')}}>
                    <View>
                        <Text style={styles.containerBoxText}>Allergic reaction </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerBox,{backgroundColor:"#DDBEA9"}]}
                    onPress={()=>{navigation.navigate('MedicationMain')}}>
                    <View>
                        <Text style={styles.containerBoxText}>Medication </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.15, flexDirection: "row"}}>
                <TouchableOpacity style={[styles.containerBox,{backgroundColor:"#DBE9B7"}]}>
                    <View>
                        <Text style={styles.containerBoxText}>Diabetes Information </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.containerBox,{backgroundColor:"#F4DADA"}]}>
                    <View>
                        <Text style={styles.containerBoxText}>chatbox </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Menu/>
            <View style={{flex:0.15, flexDirection: "row", width:'92%'}}>
                <TouchableOpacity style={[styles.containerBox,{backgroundColor:"#d6d8f5"}]}
                onPress={()=>{navigation.navigate('Retinopathy')}}>
                    <View>
                        <Text style={styles.containerBoxText}>Detect Retinopathy </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            <Menu/>

        </SafeAreaView>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    },
    header:{
        // backgroundColor: "#86C0DDs",
        width: '100%',
        height: 130,
        flex:0.14,
        flexDirection: 'row',
        padding: 5,
        // borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2.25,
        shadowRadius: 3.84,
        backgroundColor:"#B8B2A6",
        elevation: 5,
    },
    heading:{
        flex: 1,
        fontSize: 30,
        color: 'black',
        // textAlign: "center",
        marginVertical: 30,
        marginLeft:10,
        fontStyle:"italic"
    },
    profile:{
        
        width: 90,
        height:90,
        borderRadius: 50,
        marginBottom: 8,
        marginEnd: 5,
        alignSelf: 'flex-end',
    },
    profileiMAGE:{
        flex: 0.3,
        marginVertical: 10,
    },
    graph:{
        flex: 0.3,
        width: '120%',

        // height: 300,

    },
    containerBox:{
        flex:0.5,
        // borderColor:'#86C0DD',
        // borderWidth:2,
        padding: 5,
        width:"45%",
        height: 90,
        margin: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    containerBoxText:{
        fontWeight:"bold",
        fontSize:15,
        color:'black',
        textAlign:"center",
        marginVertical: 30
    },
    textStyle:{
        color:'#86C0DD',
        // backgroundColor: 'blue',
        marginTop: 15,
        marginHorizontal: 90,

    },
})