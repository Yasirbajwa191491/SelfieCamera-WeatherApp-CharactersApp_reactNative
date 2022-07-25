import React,{useState} from 'react';
import { Appbar,TextInput,Button  } from 'react-native-paper';
import { StyleSheet, Text, View,FlatList} from 'react-native';
import Datatodo from './Datatodo';
 const Todo=()=> {
  const [text, setText] =useState('');
  const [item, setItem] =useState([]);

  const fun=()=>{
    setItem((prevalue)=>{
      return [...prevalue,text];
    })
  setText("");
  }
    const delfun=(id)=>{
   setItem((prev)=>{
          return prev.filter((val,index)=>{
       return index !==id;
     })
   })
  }
  return (
    <>
     <Appbar.Header>
      
      <Appbar.Content title="Todo App" subtitle="Yasir191491" style={{alignItems:"center"}}/>
      
    </Appbar.Header>
 <TextInput
      label="Add a item"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Button icon="plus" mode="contained" onPress={fun}>
    Add
  </Button>
 
  {
    item.map((eleE,index)=>{
      return <Datatodo text={eleE} key={index} id={index}
      onSelect={delfun}
       />
})
  }
  
    </>
  );
}

export default Todo;
const styles = StyleSheet.create({
  container: {
    
    marginTop:90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
