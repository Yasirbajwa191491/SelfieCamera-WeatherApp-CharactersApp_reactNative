import React,{useState} from 'react'
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,Image,Animated,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";


const SignIn = (props) => {
    const [text, setText] = React.useState('');
  const [state, setstate] = useState("");
  const [user, setUser] = useState("");

  const fun=()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, text, state)
  .then((userCredential) => {
    setUser(userCredential);
    alert("login successfully")
    
  })
  .catch((error) => {
    alert(error.message);
  
  });
  setText("");
  setstate("");
  }
  const cfun=(user)=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       console.log(user.email)
       console.log(user.stsTokenManager.accessToken)
      } 
    })
  }
    console.log(props.token);
    return (
        <>
           <View>
          
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
    Sign In
  </Button>
  <Text>{"\n"}</Text>
<Button icon="camera" mode="contained" onPress={cfun}>
    getnfo
  </Button>
  
           </View> 
        </>
    )
}

export default SignIn
