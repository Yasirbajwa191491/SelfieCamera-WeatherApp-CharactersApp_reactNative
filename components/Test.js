import React,{createContext} from 'react'
import { View,Text,Button } from 'react-native';

 
const Test = (props) => {
  
  // const {name}=route.params;
  return (
    <View>
   <Text>Welcome {props.name}</Text>
   <Button title='Go Back' onPress={()=>navigation.goBack()} />
    </View>
  )
}

export default Test


