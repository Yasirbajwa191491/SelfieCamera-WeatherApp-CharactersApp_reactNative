
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,FlatList,Image} from 'react-native';



const App=()=> {
  
   
  return (
    <View style={[styles.container,styles.bord]}>
    
   
      <Image source={require("./assets/weather.jpg")} style={{height:200,width:200}} />
     </View>
    
    
  );
}



const styles=StyleSheet.create({
  container:{
    
    // display:"flex",
    // flexDirection:"row",
    // flexWrap:"wrap",
    // justifyContent:"space-between",
    textAlign:"center",
    // alignItems:"center",
    height:844,
    width:370,
    
    
    background:"#fff",
    padding:"10px",
    margin:"30px",
    borderRadius:"40px"
  },
  bord:{
    boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})

export default App;
