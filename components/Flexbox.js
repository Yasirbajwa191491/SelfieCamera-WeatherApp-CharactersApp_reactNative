import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import About from './components/About';


const Flexbox=()=> {
    
  return (
    <View style={[styles.container,styles.bord]}>
   <View style={{backgroundColor:"red",height:180,width:380}}>
   <h1>hello</h1>
   </View>
   <View style={{backgroundColor:"green",height:180,width:380}}>
   <h1>hello</h1>
    </View>
   <View style={{backgroundColor:"yellow",height:180,width:380}}>
   <h1>hello</h1>
    </View>
   <View style={{backgroundColor:"blue",height:180,width:380}}>
   <h1>hello</h1>
    </View>
   <View style={{backgroundColor:"blue",height:180,width:380}}>
   <h1>hello</h1>
    </View>
    </View>
    
  );
}



const styles=StyleSheet.create({
  container:{
    
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    textAlign:"center",
    alignItems:"center",
    height:"700px",
    width:"1000px",
    
    
    background:"#fff",
    padding:"10px",
    margin:"30px",
    borderRadius:"40px"
  },
  bord:{
    boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})
export default Flexbox;
