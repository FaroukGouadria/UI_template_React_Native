/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Navigation from './src/navigation/Navigation';

import OnBoardingScreen from './src/screens/AuthScreen/OnBoardingScreen';
import { Provider as PaperProvider } from 'react-native-paper';


const App = () =>{
 

  return (
    <TailwindProvider>
      <PaperProvider>
        <Navigation/>
      </PaperProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
