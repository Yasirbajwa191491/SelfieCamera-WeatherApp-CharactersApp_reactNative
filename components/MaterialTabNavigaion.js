import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar,TextInput,Button ,Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './components/Todo';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      
     
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const Home=()=> {
return (
  <View className="container" style={{backgroundColor:"pink"}}>
     <ImageBackground resizemode="cover" source={require("./assets/weather.jpg")}
               style={{height:"70%",width:"100%"}}
           /> 
           <Paragraph>abc</Paragraph>
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
