import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,FlatList,ActivityIndicator,Image,Linking,Alert,TouchableOpacity} from 'react-native';
import { Appbar,TextInput  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './components/Test';
import Checkbox from 'expo-checkbox';
import { 
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic 
} from '@expo-google-fonts/josefin-sans'
import { useFonts } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';

const Home=({navigation})=> {
  
  const [data,setData]=useState(false);  
  const [email,setEmail]=useState("");  
  const [password,setPassword]=useState("");  
  let [fontsload,error]=useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic 
   })
   if(!fontsload){
     return <AppLoading  />
   }
   const fun=()=>{
     if(!email || !password){
       Alert.alert("Please fill the data properly");

     }
     Alert.alert(`Email:${email} && Password:${password}`)
     navigation.navigate("Test",{name:`${email}`});
   }
  return (

    <View style={[styles.container,styles.bord]}>
        <Appbar.Header>
      
      <Appbar.Content title="Login Form" subtitle="Yasir191491" style={{alignItems:"center"}}/>
      
    </Appbar.Header>
    <Text>{"\n"}</Text>
    <Text style={styles.styleText}>Login Form</Text>
    <Text>{"\n"}</Text>
    <TextInput placeholder='Enter email' style={{borderRadius:20}}
      autoCapitalize="none"
      autoCorrect={false}
      autoComplete="off"
      value={email}
      onChangeText={(text)=>setEmail(text)}
    />
     <Text>{"\n"}</Text>
    <TextInput placeholder='Enter password' style={{borderRadius:20}}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      value={password}
      onChangeText={(text)=>setPassword(text)}
    />
     <Text>{"\n"}</Text>
     <View style={{display:"flex",flexDirection:"row",paddingLeft:10}}>
     <Checkbox color={data? "red":undefined} 
       value={data}
       onValueChange={()=>setData(!data)}
     />
     <Text>I agree to the conditions</Text>
     </View>
     <Text>{"\n"}</Text>
     <Button title='Submit' disabled={!data}
     onPress={fun}
      />
     
     </View>
    
    
  );
}

const App=()=>{

  const Stack=createNativeStackNavigator();
  return(
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
<Stack.Screen name='Home' component={Home} />
<Stack.Screen name='Test' component={Test} />
  </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    
  },
  styleText:{
    fontFamily: "JosefinSans_700Bold_Italic",
    fontVariant: ["small-caps"],
    letterSpacing:1,
    lineHeight:22,
    textTransform:"capitalize",
    // textAlign:"justify"  //all lines will be equall length
  },
  flat:{
    paddingVertical:50,   //padding top and padding bottom
    paddingHorizontal:50   //padding left and padding right

  }
  ,
  bord:{
    // boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})

export default App;
