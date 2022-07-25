import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './components/Todo';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Todo" component={Todo} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Home=()=> {
return (
  <View className="container" style={{backgroundColor:"black"}}>
     <ImageBackground resizemode="cover" source={require("./assets/weather.jpg")}
               style={{height:"70%",width:"100%"}}
           /> 
  </View>
)
}

export default App;
const styles = StyleSheet.create({
  container: {
    
    marginTop:90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
