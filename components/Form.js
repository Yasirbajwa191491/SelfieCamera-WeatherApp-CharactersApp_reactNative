
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';



const Form=()=> {
  const [state, setstate] = useState(null);
  const [user, setUser] = useState(null);
  const fun=()=>{
    
    alert(`${state} ${user}`);
    }
    
  return (
    <View style={[styles.container,styles.bord]}>
    <TextInput placeholder='Enter the value' name="name" value={state}
     onChangeText={setstate}/>
    <TextInput secureTextEntry={true} placeholder='Enter the name' name="pass"  value={user}
    onChangeText={setUser}/>
      <Text>{state}</Text><br/>
      <Button title='Submit' onPress={fun}/>
      {/* <About name={"About"}/> */}
    </View>
  );
}



const styles=StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    height:"300px",
    width:"300px",
    
    
    background:"#fff",
    padding:"10px",
    margin:"30px",
    borderRadius:"40px"
  },
  bord:{
    boxShadow: "0 5px 20px rgba(0, 0,0, 0.5)",
  }
})
export default Form;
