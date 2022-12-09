import React,{useState} from "react";
<<<<<<< HEAD
import {View,Text,StyleSheet, SafeAreaView,StatusBar, ScrollView, Keyboard, Alert, TouchableOpacity,Image} from "react-native";
=======
import {View,Text,StyleSheet, SafeAreaView,StatusBar, ScrollView, Keyboard, Alert, TouchableOpacity} from "react-native";
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
import Colors from "../../files/Colors";
import { MyButton } from "../components/button";
import { Input } from "../components/input";
import { MainHeading } from "../components/mainHeading";
import Loader from "../components/loader";
import generalStyles from "../../files/generalStyle";
<<<<<<< HEAD

=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
import colors from "../../files/Colors";






export const Registeration=function({navigation}){



    // this state input keeps track of the data written inside the input
    const [inputList,setInputList]=React.useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    });

    //to set and get error message
    const [errorMessages,setErrorMessages]=useState({})

    //Validation Function called whenever register butto is clicked
    const validation=()=>{
        //first close the keyboard
        Keyboard.dismiss();
        let valid=true;

        //if empty
        if(!inputList.email){
            handleErrorMessage("Please input email","email")
             valid=false;
        }
        else if (!inputList.email.match(/\S+@\S+\.\S+/)){
            handleErrorMessage("Please input valid email","email")
             valid=false;
        }

        if(!inputList.name){
            handleErrorMessage("Please enter name","name")
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

        if(!inputList.cpassword){
            handleErrorMessage("Please enter confirmed password","cpassword")
            valid=false;
        }
        else if(inputList.cpassword!==inputList.password){
            handleErrorMessage("Confirm password does not match the password","cpassword")
            valid=false;
        }
        
        if (valid){
            register();
        }
    };

    const [loader,setLoader]=useState(false)

    const register=()=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
            try{
               // AsyncStorage.setItem("user",JSON.stringify(inputList));
                navigation.navigate("LoginScreen");
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
        console.log(inputList)
    };

    const handleErrorMessage=(newerrorMessage,inputType)=>{
        setErrorMessages(prevState=>({...prevState,[inputType]:newerrorMessage}));
        console.log(errorMessages)
    }

    return (
<<<<<<< HEAD
        <SafeAreaView style={styles.container}>
=======
        <SafeAreaView style={generalStyles.container}>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
            <StatusBar backgroundColor="#495057" barStyle="light-content"></StatusBar>
            <Loader visible={loader}/>
            <ScrollView style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}>
<<<<<<< HEAD
                {/* <MainHeading heading="registration" style={{width:"100%"}}/> */}
                <Image style={styles.headImage} resizeMode={"contain"} source={require("../../../assets/Images/register.jpg")}/>
                <Text style={styles.heading}>Register</Text>
=======
                <MainHeading heading="registration" style={{width:"100%"}}/>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                <View style={{marginHorizontal:"10%",flex:1}}>
                <Input 
                label="Name" 
                onChangeText={text=>handleOnTextChange(text,"name")}
                iconName="account-outline"
                placeholder="Enter your full name"
                errorMessage={errorMessages.name}
                onFocus={()=>{handleErrorMessage(null,"name")}}
               
                />
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
                <Input 
                label="confirm password" 
                iconName="lock-outline"
                placeholder="Enter your Password"
                onChangeText={text=>handleOnTextChange(text,"cpassword")}
                password
                errorMessage={errorMessages.cpassword}
                onFocus={()=>{handleErrorMessage(null,"cpassword")}}
                />
                <MyButton title="Register" onPress={validation}/>
<<<<<<< HEAD
                <TouchableOpacity onPress={()=>navigation.navigate("EnterCode")}>
=======
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
                    <Text style={styles.loginText}  >Already have an account? Login</Text>
                </TouchableOpacity>

                </View>
               

            </ScrollView>

        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
<<<<<<< HEAD
        backgroundColor:"white"
=======
        backgroundColor:Colors.white
    },
    scrollViewContainer:{
        width:"100%",

        paddingTop:10,
        paddingHorizontal:"5%",
        marginVertical:"10%"
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    },
    loginText:{
        textAlign:"center",
        fontWeight:"bold",
<<<<<<< HEAD
        color:colors.darkGreyBlue,
        marginTop: 4
 
    },
    headImage:{
        width:"100%",
        alignSelf:"center",
        height: 200,
        margin: 15
      },
      heading:{
        fontSize: 30,
            fontStyle: "italic",
            textAlign: "center",
            fontWeight: "bold",
            color: 'black',
            marginBottom: 15,
            marginTop: 10
      }
=======
        color:colors.darkGreyBlue
 
    }
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  
})