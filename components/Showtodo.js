import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
const Showtodo = (props) => {
    const fun=()=>{
        props.onSelect(props.id);
    }
  return (
    <>
      <View style={styles.container}>
      <Button icon="delete" mode="contained" onPress={fun}></Button>

        <Text>{props.text}</Text>
      </View>
    </>
  )
}

export default Showtodo
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      display:"flex"
    },
  });