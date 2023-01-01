import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

exports.checkRoot= ()=>{
       axios.get("http://10.0.2.2:3000/")
            .then(res=>{console.log(res.data)})
            .catch(err=>{console.log(err)})
}


exports.registeration=(name,email,password)=>{
       console.log("name ",name)
       axios.post("http://10.0.2.2:3000/register",
       {"name":name,
       "email":email,
       "password":password}
       )
       .then((res)=>{
              if(res.data.error!==undefined){
                     console.log("Email already exists");
              }
              if(res.data.token!==undefined){
                     console.log("token is", JSON.stringify(res.data.token));
                     storeTokenInStorage(res.data.token)
              }
       })
       .catch((err)=>{
              console.log(err)
              
       })
       return true
}

exports.signIn=(email,password)=>{
       axios.post("http://10.0.2.2:3000/login",
       {"email":email,
       "password":password}
       )
       .then((res)=>{
              if(res.data.error!==undefined){
                     console.log("user not found");
              }
              if(res.data.token!==undefined){
                     console.log("token is", res.data.token);
                     storeTokenInStorage(res.data.token)
              }
       })
       .catch((err)=>{
              console.log(err)
       })
}

const storeTokenInStorage=async(value)=>{
      try {console.log("token in store data is ",JSON.stringify(value))
      const obj={"token":value}
await AsyncStorage.setItem("@token",JSON.stringify(obj))
 const data=await AsyncStorage.getItem(("@token"))
console.log("here")
console.log(`in Asyncstorage token is= ${JSON.parse(data).token}`)}
catch(err){
       console.log(err)
}
}

exports.sendOTP=async()=>{
       console.log("IN otp")
       try{  
              const token=(JSON.parse(await AsyncStorage.getItem("@token")).token)
       console.log("token in otp ",token)
             const res=await axios.get("http://10.0.2.2:3000/otp/sendemail",
             {headers:{"Authorization":"Bearer "+token}})
       console.log(res.data);
       }
       catch(err){
              console.log(err);
       }

}