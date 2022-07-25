import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,FlatList,Image,Linking} from 'react-native';
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

const App=()=> {
  
  const [data,setData]=useState([
    {id:1,name:"yasir"},
    {id:2,name:"yasir"},
    {id:3,name:"yasir"},
    {id:4,name:"yasir"},
    {id:3,name:"yasir"},
    {id:4,name:"yasir"},
    {id:3,name:"yasir"},
    {id:4,name:"yasir"},
    {id:3,name:"yasir"},
    {id:4,name:"yasir"},
    {id:"1",name:"yasir"},
    {id:"2",name:"yasir"},
    {id:"3",name:"yasir"},
    {id:"4",name:"yasir"},
    {id:"5",name:"yasir"},
    {id:"6",name:"yasir"},
    {id:"7",name:"yasir"},
    {id:"8",name:"yasir"},
    {id:"9",name:"yasir"},
    {id:"10",name:"yasir"},
    {id:"11",name:"yasir"},
    {id:"12",name:"yasir"},
  ]) 
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
  return (
    <View style={[styles.container,styles.bord]}>
    
    {/* <View style={{backgroundColor:"blue",height:180,width:380}}>
    <h1>hello</h1>
     </View> */}
     <FlatList data={data} renderItem={({item})=><Text style={{backgroundColor:"blue",
     height:90,width:90,margin:10}}>{item.name}</Text>} 
      horizontal
      keyExtractor={(key)=>{
        return key.id;
      }}
showsHorizontalScrollIndicator={false}
inverted //reverse data
     />
     <Text style={styles.styleText}>hello world hyyyyyyyyyyyyyyyyyyyy
     hhhhhhhhhhhhhhhhhhhhhhhhh</Text>
     <Button title='Clickme' onPress={()=>Linking.openURL("https://www.google.com/search?q=google.&rlz=1C1CHBD_enPK970PK970&oq=google.&aqs=chrome..69i57j0i271l3j69i60l3.16230j0j7&sourceid=chrome&ie=UTF-8")} />
     <Text style={styles.styleText}>hello world</Text>
      <Image source={require("./assets/icon.png")} style={{height:undefined,aspectRatio:1,width:"100%"}} />
     </View>
    
    
  );
}



const styles=StyleSheet.create({
  container:{
    
    // display:"flex",
    // flexDirection:"row",
    // flexWrap:"wrap",
    // justifyContent:"space-between",
    textAlign:"center",
    // alignItems:"center",
    height:844,
    width:350,
    
    
    background:"#fff",
    padding:"10px",
    margin:"30px",
    borderRadius:"40px"
  },
  styleText:{
    fontFamily: "JosefinSans_600SemiBold"
  }
  ,
  bord:{
    boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})

export default App;
