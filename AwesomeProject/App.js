/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/Home/HomeScreen';
import Navigation from './src/Navigation/Navigation';
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const App = () => {

  return (
   <Navigation/>
  )

}



export default App;
