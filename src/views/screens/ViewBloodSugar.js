import React,{useState,useEffect} from "react";
import {View,Text,SafeAreaView,StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import generalStyles from "../../files/generalStyle";
import { MainHeading } from "../components/mainHeading";
import colors from "../../files/Colors";
import {viewBloodSugarRecord} from "../connectionToDB/trackerBloodSugar"


export default ViewBloodSugar=({navigation})=>{
    const [mount,setMount]=useState(0)
    const [sugarData,setSugarData]=useState([]);//[{s:120,d:80},{s:133,d:90},{s:100,d:70},{s:120,d:99},{s:170,d:100}];

    const loadDataOnlyOnce = async() => {
        alert("loadDataOnlyOnce");
         viewBloodSugarRecord()
         .then((res)=>{
            console.log(res)
            console.log(res[0])
            setSugarData(res);
            console.log(sugarData)
         })
         .catch(err=>{console.log("Error in loadDataOnlyOnce in viewBloodSugar ",err)})
       
        
      };
          useEffect(() => {
            if(mount===0){
              loadDataOnlyOnce(); 
              setMount((oldVal)=>oldVal++);
            }
          },[mount]);
    

    const data=[
        {
            id:1,
            concentration:120,
            event:"day",
            time:"10:00 am",
            note:"abc"
        },
        {
            id:2,
            concentration:128,
            event:"night",
            time:"11:00 pm",
            note:"xyz"
        },
        {
            id:3,
            concentration:128,
            event:"night",
            time:"11:00 pm",
            note:"xyz"
        },
        {
            id:4,
            concentration:128,
            event:"night",
            time:"11:00 pm",
            note:"xyz"
        },
        {
            id:5,
            concentration:128,
            event:"night",
            time:"11:00 pm",
            note:"xyz"
        },
    ]
 return(   
 <SafeAreaView>
        <MainHeading heading="Blood Sugar" backgroundColor='#86C0DD'/> 

        <FlatList 
        style={[generalStyles.spacing,styles.flatlist]}
        data={sugarData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:"15%" }}
        renderItem={({item})=>{
            return(
                <TouchableOpacity style={styles.flatlistView} onPress={()=>{navigation.push("AddBloodSugar",{"id":item._id})}}>
                    <View style={styles.box1}>
                        <Text style={styles.concentration}>{item.concentration} </Text>
                        
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.time}>{item.creationTime}</Text>
                        <Text style={styles.event}>{item.event}</Text>
                    </View>          
                </TouchableOpacity>
            );
        }}>
        </FlatList>
        
        <TouchableOpacity style={styles.addButton}
        onPress={()=>{
            navigation.navigate("AddBloodSugar");
        }}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>


{/* <Button title="colors" onPress={()=>{navigation.navigate("ColorPalette")}}></Button> */}
    </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    flatlist:{
        height:"90%",
        marginBottom:"2%",
    },
    flatlistView:{
        borderWidth:2,
        flexDirection:"row",
        margin:"1%",
        height:150,
        borderColor:'#86C0DD'
         
    },
    box1:{
        backgroundColor:colors.blue3,
        flex:1,
        borderColor:colors.blue5,
        borderWidth:4,
        height:"90%",
        marginRight:"2%",
        alignItems:"center",
        justifyContent:"center",
        opacity:0.5
    },
    box2:{
        flex:1,
        backgroundColor:colors.blue2,
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    concentration:{
        fontSize:50,
        fontWeight:"bold",
        color:colors.darkGreyBlue

    },
    event:{
        fontSize:14,
        textTransform:"capitalize",
        color:colors.darkGreyBlue,
        fontWeight:"bold"
    },
    time:{
        fontSize:20,
        color:colors.darkGreyBlue,
        fontWeight:"bold"

    },
    addButton:{
        position:"absolute",  
        bottom:"5%",
        right:"4%",
        borderRadius:100,
        backgroundColor:colors.headingBlue,
        width:"20%",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
    },
    addButtonText:{
        fontSize:40,
        fontWeight:"bold",
        color:colors.darkGreyBlue
    }
    
});