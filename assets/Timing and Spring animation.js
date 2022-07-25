import React, { createContext } from 'react'
import { View,Text,Animated, PanResponder,TouchableOpacity ,Easing} from 'react-native'
import Context from './components/Context';
import {Name} from "./components/Test";
import Header from "./components/Header"

const App = () => {
 const opacity=new Animated.ValueXY({x:0,y:0})

 const FadeIn=()=>{
   Animated.timing(opacity,{
    toValue: {x:100,y:300}, 
    duration:2000,
    easing: Easing.linear, // can be Easing.linear , bounce, elastic
    // delay:2000, //after 2 sec animation will start
    useNativeDriver:true
   }).start()
   Animated.timing(opacity,{
    toValue: {x:100,y:300}, 
    duration:2000,
    easing: Easing.elastic(2), // can be Easing.linear , bounce, elastic
    // delay:2000, //after 2 sec animation will start
    useNativeDriver:true
   }).start()
   Animated.timing(opacity,{
    toValue: {x:100,y:300}, 
    duration:2000,
    easing: Easing.bounce, // can be Easing.linear , bounce, elastic
    // delay:2000, //after 2 sec animation will start
    useNativeDriver:true
   }).start()
 }
 const FadeOut=()=>{
   Animated.spring(opacity,{
    toValue:{x:200,y:200}, 
    bounciness: 30,
    speed: 10,
    useNativeDriver:true
   }).start()
 }
  return (
    <>
     <Header />
     <Animated.View style={{backgroundColor:"yellow",
     transform: [
      { translateX: opacity.x}
     ],height:100,width:100,borderColor: 100/2}}>
      
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
