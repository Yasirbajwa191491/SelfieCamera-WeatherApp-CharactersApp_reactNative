import React from 'react'
import { View,Text,Animated } from 'react-native'
const App = () => {
  const position=new Animated.ValueXY({x:0,y:0});
  Animated.spring(position,{
    toValue:{x:200,y:500},
   bounciness:40,
   speed:20
  }).start();
  const rotate=position.x.interpolate({
    inputRange:[0,100],
    outputRange:["0deg","360deg"]
  })
  return (
    <>
      <Animated.View style={{height:100,width:100,backgroundColor:"red",alignItems:"center",
      textAlign:"center",marginTop:30,transform:[
        {translateX: position.x},
        // {translateY: position.y}
        {rotate: rotate}
      ]}}>
        <Text>Welcome</Text>
      </Animated.View>
    </>
  )
}

export default App


import React from 'react'
import { View,Text,Animated } from 'react-native'
const App = () => {
  const position=new Animated.ValueXY({x:0,y:0});
  Animated.timing(position,{
    toValue:{x:200,y:500},
   duration:2000
  }).start();
  const rotate=position.x.interpolate({
    inputRange:[0,50],
    outputRange:["0deg","360deg"]
  })
  return (
    <>
      <Animated.View style={{height:100,width:100,backgroundColor:"red",alignItems:"center",
      textAligns:"center",marginTop:30,transform:[
        {translateX: position.x},
         {translateY: position.y},
        {rotate: rotate}
      ]}}>
        <Text>Welcome</Text>
      </Animated.View>
    </>
  )
}

export default App
