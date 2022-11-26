import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import PageHeading from '../components/PageHeading';

export default AddMeal = function ({navigation}) {

  return (
    <SafeAreaView style={{flex:1}}>
      <PageHeading title="Add Meal" image ={require('../../../assets/head3.jpg')} />
      <ScrollView style={styles.scrollViewCon}>
        <TextInput style={styles.input} placeholder='Enter Dish name'/>
        <TextInput style={styles.input} placeholder='Enter Calories'/>
        <TextInput style={styles.input} placeholder='Enter Carbohydrates'/>
        <TextInput style={styles.input} placeholder='Enter Protein'/>
        <TextInput style={styles.input} placeholder='Enter Fats'/>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Image</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollViewCon:{
    flex:1,
    marginTop: 30,
    padding: 5
  },
  input: {
     width: '90%',
     backgroundColor: '#DDBEA9',
     margin: 10,
     alignSelf: 'center'
  },
  button:{ 
    flex:1,
    backgroundColor:'#A5A58D',
    width:180,
    height:40,
    textAlign:"center",
    justifyContent:"center",
    alignSelf: 'center',
    marginTop: 19
    },
    buttonText:{
        color: 'white',
        textAlign:"center",
        fontWeight:"bold",
        fontSize:16,
      
    }
});
