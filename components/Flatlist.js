
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,FlatList,Image} from 'react-native';



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
  return (
    <View style={[styles.container,styles.bord]}>
    
    {/* <View style={{backgroundColor:"blue",height:180,width:380}}>
    <h1>hello</h1>
     </View> */}
     <FlatList data={data} renderItem={({item})=><Text style={{backgroundColor:"blue",height:90,width:90,margin:10}}>{item.name}</Text>} 
      horizontal
      keyExtractor={(key)=>{
        return key.id;
      }}
showsHorizontalScrollIndicator={false}
inverted //reverse data
     />
      {/* <Image source={require}/> */}
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
    width:370,
    
    
    background:"#fff",
    padding:"10px",
    margin:"30px",
    borderRadius:"40px"
  },
  bord:{
    boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})

export default App;
