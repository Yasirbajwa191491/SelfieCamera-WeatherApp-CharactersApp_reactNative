import React from 'react'
import { View,Text,Animated, PanResponder } from 'react-native'
const App = () => {
  const position=new Animated.ValueXY({x:0,y:0});
  const pan=PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderMove:
     Animated.event([
      null,
      {dx: position.x,dy: position.y}
    ])
    // (e,gesture)=>{
    //   position.setValue({x:gesture.dx,y:gesture.dy})
    // }
    ,
    onPanResponderRelease:()=>{
      // position.setValue({x:0,y:0})
      Animated.spring(position,{
        toValue:{x:0,y:0}
      }).start()
    }
  })
  const rotate=position.x.interpolate({
    inputRange:[0,50],
    outputRange:["0deg","360deg"]
  })
  return (
    <>
      <Animated.View 
      {...pan.panHandlers}
      style={{height:100,width:100,backgroundColor:"red",alignItems:"center",
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
