// import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Appbar,TextInput,Button  } from 'react-native-paper';
// import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// //import { useNavigation } from '@react-navigation/native';
// import Header from './components/Header';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Test from './components/Test';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Tab = createBottomTabNavigator();
//  const App=()=> {
  
//   return (
//     <>
//    <NavigationContainer>
//    <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Header') {
//               iconName = focused ? 'home' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }}/>
//         <Tab.Screen name="Header" component={Header} />
//         <Tab.Screen name="Test" component={Test} />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </>
//   );
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
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }