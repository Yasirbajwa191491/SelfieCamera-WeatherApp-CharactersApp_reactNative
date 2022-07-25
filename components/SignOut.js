import React,{useState} from 'react'
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,Image,Animated,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
    const cfun=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          alert("Sign out successully")
        }).catch((error) => {
          alert(error.message);
        });
    }
    return (
        <>
          <View>
          <Text>{"\n"}</Text>
<Button icon="camera" mode="contained" onPress={cfun}>
    Sign Out
  </Button>
          </View>  
        </>
    )
}

export default SignOut
