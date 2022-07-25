
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,FlatList} from 'react-native';
const App=()=> {
  
  const [state, setstate] = useState({
    invalid:""
  })
  const fun=(e)=>{
    const rjx=/^[a-zA-Z]+$/
    if(!rjx.test(e)){
      alert("invalid character");
    }
  }
  return (

    <View style={[styles.container,styles.bord]}>
    <TextInput placeholder='Enter value' maxLength={8} />    
    <TextInput placeholder='Enter value' onChangeText={fun} />    
    {/* <View style={{backgroundColor:"blue",height:180,width:380}}>
    <h1>hello</h1>
     </View> */}
     </View>
    
    
  );
}



const styles=StyleSheet.create({
  container:{
    
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    textAlign:"center",
    alignItems:"center",
    height:"700px",
    width:"1000px",
    
    
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
