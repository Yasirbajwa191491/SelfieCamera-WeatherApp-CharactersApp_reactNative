import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import {Name} from "./Test"
const Context = () => {
    const context = useContext(Name)
    return (
        <>
          <View style={{marginTop:90,marginLeft:30}}>
              <Text>hello wold {context}</Text>

          </View>  
        </>
    )
}

export default Context
