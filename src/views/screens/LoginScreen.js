import path from "path";
import React,{useState} from "react";
<<<<<<< HEAD
import {View,Button,Text,StyleSheet, SafeAreaView, ScrollView, Keyboard, Alert, TouchableOpacity,Image} from "react-native";
=======
import {View,Button,Text,StyleSheet, SafeAreaView, ScrollView, Keyboard, Alert, TouchableOpacity} from "react-native";
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
import { Input } from "../components/input";
import colors from "../../files/Colors";
import { MyButton } from "../components/button";
import { MainHeading } from "../components/mainHeading";
import Loader from "../components/loader";
import generalStyles from "../../files/generalStyle";
<<<<<<< HEAD
import PageHeading from "../components/PageHeading";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { title } from "process";
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00



export default function LoginScreen({navigation}){

   // this state input keeps track of the data written inside the input
   const [inputList,setInputList]=React.useState({
    email:"",
    password:"",
});

//to set and get error message
const [errorMessages,setErrorMessages]=useState({})


const validation=async ()=>{
    //first close the keyboard
    Keyboard.dismiss();
    let valid=true;

    ////////nEED TO REMOVE THIS IF AFTERWARDS FROM HERE//////////////////////////

    //login to the account using token
fetch('http://10.0.2.2:3000/user/signin',
{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({"email":inputList.email , "password":inputList.password})
}
)
.then(res => res.json())
.then(async (data)=>{
    console.log(data)
    try{
        await AsyncStorage.setItem("token",data.token)
    }
    catch(err){
        console.log("Could not store is async storage ",e)
    }
})
.catch(err=>console.log(err))

    if (valid){
        login();
    }

    //////////////////////////////////////////////////////////////////////////////

    //if empty
    if(!inputList.email){
        handleErrorMessage("Please input email","email")
         valid=false;
    }
    else if (!inputList.email.match(/\S+@\S+\.\S+/)){
        handleErrorMessage("Please input valid email","email")
         valid=false;
    }

    if(!inputList.password){
        handleErrorMessage("Please enter password","password")
        valid=false;
    }
    else if(inputList.password.length<5 || !inputList.password.match(/[A-Z]+[a-z]+[0-9]+\W+/)){
        handleErrorMessage("Your password length must be greater than 5 and must have atleast 1 capital,smaller alphabets and a digit ","password")
        valid=false;
    }
    // if (valid){
    //     login();
    // }
};

const [loader,setLoader]=useState(false)

const login=()=>{
    setLoader(true);
    setTimeout(()=>{
        setLoader(false);
        try{
<<<<<<< HEAD
            navigation.navigate("HomeScreen");
=======
        navigation.navigate("Home");
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
        }
        catch(error){
            Alert.alert("Error","Something went wrong")
        }
    }
    ,3000)
}

//Methoda sets the state change in inputList
const handleOnTextChange=(newText,inputType)=>{
    setInputList(prevInputListState=>({...prevInputListState,[inputType]:newText}));
    console.log("InputList: ",inputList)
};

const handleErrorMessage=(newerrorMessage,inputType)=>{
    setErrorMessages(prevState=>({...prevState,[inputType]:newerrorMessage}));
    console.log("ErrorMessage: ",errorMessages)
}



<<<<<<< HEAD
return(<SafeAreaView style={styles.container}>
  <Loader visible={loader}/>
  <ScrollView style={styles.scrollViewContainer}> 
  {/* <MainHeading heading="login"  style={{width:"100%"}}/> */}
  <Image style={styles.headImage} resizeMode={"contain"} source={require("../../../assets/Images/login1.jpg")}/>
   <Text style={styles.heading}>Login</Text>
=======
return(<SafeAreaView style={[generalStyles.container,styles.container]}>
  <Loader visible={loader}/>
  <ScrollView style={styles.scrollViewContainer}> 
  <MainHeading heading="login"  style={{width:"100%"}}/>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  <View style={{marginHorizontal:"10%",flex:1}}>
  <Input 
          label="Email" 
          iconName="email-outline"
          placeholder="Enter your email"
          onChangeText={text=>handleOnTextChange(text,"email")}
          errorMessage={errorMessages.email}
          onFocus={()=>{handleErrorMessage(null,"email")}}
          />

  <Input 
          label="password" 
          iconName="lock-outline"
          placeholder="Enter your Password"
          password
          onChangeText={text=>handleOnTextChange(text,"password")}
          errorMessage={errorMessages.password}
          onFocus={()=>{handleErrorMessage(null,"password")}}
          />
<<<<<<< HEAD
          <TouchableOpacity onPress={()=>{navigation.navigate("ForgetPassword")}}>
              <Text >Forgot password?</Text>
      </TouchableOpacity>
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
      <MyButton title="Login" onPress={validation}/>

      <TouchableOpacity onPress={()=>{navigation.navigate("Registration")}}>
              <Text style={styles.forgetPasswordText}  >Don't have an account? Register!</Text>
      </TouchableOpacity>
      </View>
  </ScrollView>
</SafeAreaView>
)
};

 const styles=StyleSheet.create({
  container:{  
<<<<<<< HEAD
      flex:1,
      backgroundColor:"white",
  },
  scrollViewContainer:{
      width:"100%",
 
=======
      backgroundColor:colors.white,
 

  },
  scrollViewContainer:{
      width:"100%",
      paddingTop:10,
      paddingHorizontal:"5%",
      marginVertical:"10%"
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  },
  forgetPasswordText:{
      textAlign:"center",
      fontWeight:"bold",
<<<<<<< HEAD
      color:colors.darkGreyBlue,
      marginTop: 4
  },
  headImage:{
    width:"100%",
    alignSelf:"center"
  },
  heading:{
    fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: "bold",
        color: 'black',
        marginBottom: 15
  },

  
=======
      marginTop:-15,
      color:colors.darkGreyBlue
  }
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
});


