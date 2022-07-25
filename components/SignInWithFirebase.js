import React,{useState,useRef,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,Image,Animated,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './components/Todo';
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import { firebaseConfig } from './components/config';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
initializeApp(firebaseConfig);
const SignInWithFirebase=()=> {
  const [text, setText] = React.useState('');
  const [state, setstate] = useState("");
  const [user, setUser] = useState("");

  const fun=()=>{
    const auth = getAuth();
createUserWithEmailAndPassword(auth, text, state)
  .then((userCredential) => {
    setUser(userCredential);
    alert("user created successfully")
  })
  .catch((error) => {
    alert(error.message);
  
  });
  setText("");
  setstate("");
  }
  
  return (
    <>
    <Appbar.Header>
      
      <Appbar.Content title="Weather App" subtitle="Yasir191491" style={{alignItems:"center"}}/>
      
    </Appbar.Header>
<Text>{"\n"}</Text>
<TextInput
       
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
    <TextInput
     
      label="Password"
      secureTextEntry={true}
      value={state}
      onChangeText={text => setstate(text)}
    />
<Button icon="camera" mode="contained" onPress={fun}>
    Sign up
  </Button>
{/* <TouchableOpacity>
  <Text style={{textAlign:"center"}}>hello wold</Text>
</TouchableOpacity>
<View>
<ActivityIndicator size={'large'} color={"black"}/></View> */}
     </>
  );
}

export default SignInWithFirebase;
const styles = StyleSheet.create({
  container: {
    
    marginTop:90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
