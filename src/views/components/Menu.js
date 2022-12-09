import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../files/Colors';
import HomeScreen from '../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';


export default Menu = function () {
    const navigation = useNavigation();
    [getColor, setColor] = useState("white");
    const HomePressed=()=>{
        this.color = "grey";
        navigation.navigate('HomeScreen')
        
    }
    const TrackerPressed =()=>{
        navigation.navigate('Tracker')
    }
    const DietPressed=()=>{
        navigation.navigate('DietFirstMain')
    }
    const ExercisePressed= ()=>{
    
    }

  return (
    <View style={styles.menuBox}>
        <TouchableOpacity style={styles.item}
        onPress={HomePressed}>
            <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        onPress={TrackerPressed}>
            <Text style={styles.itemText}>Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        onPress={DietPressed}>
            <Text style={styles.itemText}>Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        onPress={ExercisePressed}>
            <Text style={styles.itemText}>Exercise</Text>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    menuBox:{
        flex: 0.1,
        justifyContent: 'space-evenly',
        backgroundColor: "#B8B2A6",
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        height: 70,
       
    },
    item:{
        justifyContent: 'center',
        textAlign: 'center',
        

    }, 
    itemText:{
        fontSize: 20,
        color:'black',
    }

});
