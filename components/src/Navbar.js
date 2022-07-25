import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Button title='Click' onPress={()=>navigation.navigate("Test")} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})