// import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Appbar,TextInput,Button  } from 'react-native-paper';
// import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// //import { useNavigation } from '@react-navigation/native';
// import Header from './components/Header';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Test from './components/Test';
// const Stack = createNativeStackNavigator();
//  const App=()=> {
  
//   return (
//     <>
   
//    <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: 'Yasir App',
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//         <Stack.Screen name="Header" component={Header} />
//       </Stack.Navigator>
//     </NavigationContainer>

//     </>
//   );
// }
// const Home=()=>{
//   const [state, setstate] = useState('');
//   const navigation=useNavigation()
  
//   return(
//     <>
//     <Header />
//    <View>
//    <TextInput keyboardType={'numeric'}  label='Enter value' 
//     onChangeText={(text)=>setstate(text)}
//      ></TextInput>
//     <Text>{state}</Text>
//      <Button  icon="camera" mode="contained" onPress={()=>navigation.navigate('Header',{id:3,name:"yasir"})}>Click me</Button>
//      <Text>{"\n"}</Text>
//      <Button  icon="camera" mode="contained" onPress={()=>navigation.push('Header')}>Click here</Button>
//      <Text>{"\n"}</Text>
//      <Button  icon="camera" mode="contained" onPress={()=>navigation.goBack()}>Click here</Button>
//      <Text>{"\n"}</Text>
//      <Button  icon="camera" mode="contained" onPress={()=>navigation.popToTop()}>Click here</Button>
//     </View>

//     </>
//   )
// }
// export default App;
// const styles = StyleSheet.create({
//   container: {
    
//     marginTop:90,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
