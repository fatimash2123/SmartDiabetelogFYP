import { StyleSheet,StatusBar } from "react-native";
import colors from "./Colors";

const generalStyles=StyleSheet.create({
    container:{
        flexDirection:"column",
<<<<<<< HEAD
        backgroundColor: "white",
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
       // marginTop:StatusBar.currentHeight,
        margin:"1%",
        padding:"2%",
        flex:1,
    },
    spacing:{
        margin:"1%",
        padding:"2%"
    },
    generalHeading:{
        fontSize:14,
        color:colors.greyBlue,
        textTransform:"capitalize",
        fontWeight:"bold",
        marginVertical:"2%",
    }
})

export default generalStyles;