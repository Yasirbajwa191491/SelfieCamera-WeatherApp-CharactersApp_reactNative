import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './components/Todo';
const Tab = createBottomTabNavigator();
const App=()=> {
  
    return (
      <>
     <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Weather App') {
              iconName = focused
                ? 'cloud'
                : 'cloud';
            } else if (route.name === 'Todo App') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Weather App" component={HomeScreen} />
        <Tab.Screen name="Todo App" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>

      </>
    );
  }
   
const HomeScreen=()=> {
  const [text, setText] =useState('');
  const [state, setstate] = useState('');
  const [error, setError] = useState('');
  const fun=()=>{
   
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=a2e5ae24a46f0d890524f0490fd4e59d`).then((res)=>
res.json().then((result)=>setstate(result.weather[0].description))).catch((error)=>setError("Please try another city"))

setText("");
setstate("");
setError("")
  }
  
  return (
    <>
    <Appbar.Header>
      
      <Appbar.Content title="Weather App" subtitle="Yasir191491" style={{alignItems:"center"}}/>
      
    </Appbar.Header>
<Text>{"\n"}</Text>
 <TextInput
      label="Enter city name"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Button icon="camera" mode="contained" onPress={fun}>
    Press me
  </Button>
  <Text>{"\n"}</Text>
  <View className="container" style={{backgroundColor:"#dff9fb",height:700,borderColor:"rgba(0,0,0,0.5)"}}>
  <Text>{"\n"}</Text>
  <Ionicons name='cloud' size={100} style={{textAlign:"center",color:"red"}} />
  <Text style={{fontSize:40,textAlign:"center",color:"#ff7979"}}>{state}</Text>
<Text style={{fontSize:30,textAlign:"center",color:"red"}}>{error}</Text>
  </View>
    </>
  );
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
