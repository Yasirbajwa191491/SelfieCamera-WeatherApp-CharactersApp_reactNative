import React, { createContext } from 'react'
import { View,Text,Animated, PanResponder,TouchableOpacity } from 'react-native'
import Context from './components/Context';
import {Name} from "./components/Test";
import Header from "./components/Header"

const App = () => {
 const opacity=new Animated.Value(0);

 const FadeIn=()=>{
   Animated.timing(opacity,{
    toValue:1, 
    duration:2000,
    useNativeDriver:true
   }).start()
 }
 const FadeOut=()=>{
   Animated.timing(opacity,{
    toValue:0, 
    duration:2000,
    useNativeDriver:true
   }).start()
 }
  return (
    <>
     <Header />
     <Animated.View style={{backgroundColor:"yellow",opacity,flex:1}}>
      
     </Animated.View>
     <TouchableOpacity style={{backgroundColor:"red",height:30,width:70,margin:20}}
     onPress={FadeIn}>
       <Text >Fade in</Text>
     </TouchableOpacity>
     <Text>{"\n"}</Text>
     <TouchableOpacity style={{backgroundColor:"red",height:30,width:70,margin:20}} onPress={FadeOut}>
       <Text >Fade in</Text>
     </TouchableOpacity>
    </>
  )
}

export default App
