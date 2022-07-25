import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,Clipboard,FlatList,ActivityIndicator,Image,Linking,Alert,TouchableOpacity} from 'react-native';
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
import Navbar from './components/src/Navbar';

const Home=({navigation})=> {
  
  const [data,setData]=useState(false);  
  let [copy,setCopy]=useState("");   
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
   
   const fun=async()=>{
     Clipboard.setString(copy.toString())
  console.log(await Clipboard.getString());
    }
  return (

    <View style={[styles.container,styles.bord]}>
        <Appbar.Header>
      
      <Appbar.Content title="GET CHARACTER APP" subtitle="Yasir191491" style={{alignItems:"center"}}/>
      
    </Appbar.Header>
    <Text>{"\n"}</Text>
    <TextInput placeholder='Enter text' style={{borderRadius:20}}
      autoCapitalize="none"
      autoCorrect={false}
      autoComplete="off"
      id="text"
      maxLength={200}
      value={copy}
      numberOfLines={10}
      multiline
      onChangeText={(itext)=>setCopy(itext)}
    />
     <Text>{"\n"}</Text>
    <Text>Total characters: {copy.length.toString()}</Text>
    <Text>Remaining characters: {200-copy.length.toString()}</Text>
     <Text>{"\n"}</Text>
     <View style={{display:"flex",flexDirection:"row",paddingLeft:10}}>
     <Checkbox color={data? "red":undefined} 
       value={data}
       onValueChange={()=>setData(!data)}
     />
     <Text>I agree to the conditions</Text>
     </View>
     <Text>{"\n"}</Text>
     <Button title='Copy Text' disabled={!data}
     onPress={fun}
      />
      <Text>{"\n"}</Text>
      <Button title='Convert to UpperCase' onPress={()=>{
        setCopy(copy.toLocaleUpperCase())
      }} />
      <Text>{"\n"}</Text>
      <Button title='Convert to LowerCase' onPress={()=>{
        setCopy(copy.toLocaleLowerCase())
      }} />
           
           <Text>{"\n"}</Text>
           <Text>{"\n"}</Text>
     <Navbar />
     </View>
    
    
  );
}

const App=()=>{

  const Stack=createNativeStackNavigator();
  return(
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
<Stack.Screen name='Home' options={{title: "Get Character App"}} component={Home} />
<Stack.Screen name='Test' component={(props)=> <Test {...props} name={"Yasir191491"} />} />
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
