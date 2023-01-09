import React,{useEffect,useState}from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../files/Colors';
import { getProfileInformation,editProfileInformation } from "../connectionToDB/profile"
export default Profile = function () {

  const [mount,setMount]=useState(0)
  const loadDataOnlyOnce = async() => {
    getProfileInformation()
       .then((res)=>{
          console.log("here",res)
          setInputList(()=>{return{
            "name": res.userDetails.name,
            "email": res.userDetails.email,
            "weight": res.userDetails.weight,
            "heightFeet": res.userDetails.heightFeet,
            "heightInches": res.userDetails.heightInches,
            "diabetesType": res.userDetails.diabetesType
        }});

       })
       .catch(err=>{console.log("Error in profile screen",err)})
     
      
    };
        useEffect(() => {
          if(mount===0){
            loadDataOnlyOnce(); 
            setMount((oldVal)=>oldVal++);
          }
        },[mount]);
        const [inputList, setInputList] = useState({
          "name": "",
          "email": "",
          "weight": "",
          "heightFeet": "",
          "heightInches": "",
          "diabetesType": ""
      });

      //Method sets the state change in inputList
    const handleOnTextChange = (newText, inputType) => {
      setInputList(prevInputListState => ({ ...prevInputListState, [inputType]: newText }));
      console.log("InputList: ", inputList)
  };

  const update = () => {
    editProfileInformation(inputList.name, inputList.email, inputList.weight, inputList.heightFeet, inputList.heightInches, inputList.diabetesType)
        .then((data) => { console.log("abc", data) })
        .catch((err) => { console.log("Error in update in profile", err) })
}

  return (
    <SafeAreaView style={{flex:1}}>
      <Image style={styles.image} source={require('../../../assets/Images/profile.jpg')}/>
      <View style={styles.inputCont}>
      <TextInput style={styles.input} value={inputList.name} placeholder='Username' onChangeText={text => handleOnTextChange(text, "name")}/>
        <TextInput style={styles.input} value={inputList.email} placeholder='Email' onChangeText={text => handleOnTextChange(text, "email")}/>
        <TextInput style={styles.input} value={`${inputList.weight}`} placeholder='Weight in kg' onChangeText={text => handleOnTextChange(text, "weight")}/>
        <TextInput style={styles.input} value={`${inputList.heightFeet}`} placeholder='Height in Feet' onChangeText={text => handleOnTextChange(text, "heightFeet")}/>
        <TextInput style={styles.input} value={`${inputList.heightInches}`} placeholder='Height in Inches' onChangeText={text => handleOnTextChange(text, "heightInches")}/>
        <TextInput style={styles.input} value={`${inputList.diabetesType}`} placeholder='Diabetes Type' onChangeText={text => handleOnTextChange("Type 1","diabetesType")}/>
        <TouchableOpacity style={styles.button}
        onPress={()=>{update()}}><Text style={styles.buttonText}>Save Changes</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image:{
    width: 150,
    height:150,
    borderRadius: 70,
    alignSelf: 'center',
    marginTop: 55
  },
  inputCont:{
    flex:1,
    marginTop: 30,
    padding: 5
  },
  input: {
    width: '90%',
    backgroundColor: "#B8B2A6",
    margin: 10,
    alignSelf: 'center'
 },
 button:{ 

   backgroundColor:'#A5A58D',
   width:180,
   height:40,
   textAlign:"center",
   justifyContent:"center",
   alignSelf: 'center',
   borderRadius: 10,
   marginTop: 19
   },
   buttonText:{
       color: 'black',
       textAlign:"center",
       fontWeight:"bold",
       fontSize:16,
     
   }
});
