import React,{useState} from "react";
import {View,StyleSheet,Text, TextInput} from "react-native"; 
import colors from "../../files/Colors"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export  const Input=({label,iconName,errorMessage,password,inputBackground,textColor,multiline,...props})=>{
    const [isFocused,setIsFocused]=React.useState(false)
    const [hidePassword,setHidePassword]=React.useState(password)
    const [multi,setMultiline]=useState(multiline?true:false)
    return(
        <View style={styles.container}>
            <Text style={[styles.text,{color:textColor?textColor:colors.greyBlue}]}>
                {label}
            </Text>
            <View style={[styles.Inputcontainer,{ height:(multi)?100:50,alignItems:(multi)?"flex-start":"center"},
            {paddingVertical:multi?"2%":0},
                {borderColor:errorMessage?colors.red:isFocused?colors.headingBlue:colors.darkGreyBlue}
                ,{backgroundColor:(inputBackground)?inputBackground:colors.backgroundBlue}
                ]}>
                <Icon name={iconName} style={styles.iconStyle}></Icon>
                <TextInput {...props} style={styles.textInput} autoCorrect={false} multiline={multi}
                placeholderTextColor={colors.greyBlue} 
                secureTextEntry={hidePassword}
                isFocus={()=>{setIsFocused(true)}}
                onBlur={()=>{setIsFocused(false)}}
                ></TextInput> 
                { password &&(
                <Icon name={hidePassword?"eye-outline":"eye-off-outline"} onPress={()=>{setHidePassword(!hidePassword)}} style={styles.iconStyleEye}></Icon>
                )}
            </View>
            <Text style={styles.errorMessageText}> {errorMessage}</Text>

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        
    },
    text:{
        marginVertical:"2%",
        fontSize:14,
        color:colors.greyBlue,
        textTransform:"capitalize",
        fontWeight:"bold"
    },
    Inputcontainer:{
       
        display:"flex",
        flexDirection:"row",
        paddingHorizontal:10,
        borderWidth:1,
        alignItems:"center",
        backgroundColor:"colors.backgroundBlue"
    },
    iconStyle:{
        fontSize:12,
        color:colors.greyBlue,
        marginHorizontal:5
    }, 
    iconStyleEye:{
        fontSize:12,
        color:colors.greyBlue,
        marginHorizontal:5,
        position:"absolute",
        right:0

    },
    textInput:{
        color:colors.darkGreyBlue,
        marginRight:10,
    },
    errorMessageText:{
        color:colors.red,
        fontSize:12,
        marginLeft:2
    }
})