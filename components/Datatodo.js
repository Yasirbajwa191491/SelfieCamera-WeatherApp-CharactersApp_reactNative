import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Datatodo = (props) => {
    const fun=()=>{
        props.onSelect(props.id);
    }
  return (
    <>
       
      <Text>{"\n"}</Text>
      <View style={styles.container}>
      <Button icon="delete" mode="contained" onPress={fun}></Button>
      {/* <Text>{"\n"}{"\n"}{"\n"}</Text> */}
      <Text>{props.text}</Text>
      </View>
    </>
  )
}

export default Datatodo;
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      display:"flex",
      flexDirection:"row",
      marginLeft:30
    },
  });