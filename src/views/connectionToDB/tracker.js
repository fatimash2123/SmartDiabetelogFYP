import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { response } from "express";

//method to add blood pressure instance
exports.addBloodPressureRecord = async (disystolic, systolic, description) => {
    try {
        console.log(disystolic, systolic, description)
        const token = (JSON.parse(await AsyncStorage.getItem("@token")).token)
        const res = await axios.post("http://10.0.2.2:3000/bloodpressure",
            {
                "disystolic": disystolic,
                "systolic": systolic,
                "description": description,
            },
            { headers: { "Authorization": "Bearer " + token } },
        )
        console.log(res.data)
    }
    catch (err) {
        console.log(err);
    }
}

//get all to add blood pressure instances of a week
exports.viewBloodPressureRecord = async () => {
    //get todsys, week start and weed end dates
    let date = new Date();
    let startWeek = new Date();
    let endWeek = new Date();
    startWeek.setDate(date.getDate() - (new Date().getDay()));
    endWeek.setDate(date.getDate() - (new Date().getDay()) + 6);
    console.log("\n\ntoday full date  is ", date)
    console.log("week starts from ", startWeek)
    console.log("week ends to ", endWeek)
    try {
        const token = (JSON.parse(await AsyncStorage.getItem("@token")).token)
       // alert(`${startWeek.getFullYear()}-${startWeek.getMonth() + 1}-${startWeek.getDate()}`)
        //alert(`${endWeek.getFullYear()}-${endWeek.getMonth() + 1}-${endWeek.getDate()}`)
        const res = await axios.get(`http://10.0.2.2:3000/bloodpressure/${startWeek.getFullYear()}-${startWeek.getMonth() + 1}-${startWeek.getDate()}/${endWeek.getFullYear()}-${endWeek.getMonth() + 1}-${endWeek.getDate()}`,
            {
                headers: { "Authorization": "Bearer " + token },
            }
        )
        const data=(res.data)
        if ((data).length > 0) {
            return (data)
        }
        else {
            return new Array(0)
        } 
    }
    catch (err) {
        console.log(err);
    }
}


//get a specific blood pressure instance
exports.viewBloodPressureInstance = async (id) => {
   
    try {
        const token = (JSON.parse(await AsyncStorage.getItem("@token")).token)
       const res = await axios.get(`http://10.0.2.2:3000/bloodpressure/instance/${id}`,
            {
                headers: { "Authorization": "Bearer " + token },
            }
        )
        const data=(res.data)
        console.log(data)
        if (data!==null) {
            return (data)
        }
    }
    catch (err) {
        console.log(err);
    }
}