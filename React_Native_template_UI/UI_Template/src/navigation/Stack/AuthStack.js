
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import HomeScreen from '../../screens/HomeScreen';
import OnBoardingScreen from '../../screens/AuthScreen/OnBoardingScreen';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import RegisterScreen from '../../screens/AuthScreen/RegisterScreen';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    const [isFirstLaunch,setIsFirstLaunch] = useState(false);
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value)=>{
            if(value === null ){
                AsyncStorage.setItem('alreadyLaunched','true');
                setIsFirstLaunch(true)
            }else{
                setIsFirstLaunch(false)
            }
        });
    }, []);
    
        return(
            <Stack.Navigator initialRouteName='OnBoarding'>
                {isFirstLaunch && (
                    <Stack.Screen options={{headerShown:false}} name='OnBoarding' component={OnBoardingScreen}/>
                )}
                <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen}/>
                <Stack.Screen options={{headerShown:false}} name='Rrgister' component={RegisterScreen}/>
            </Stack.Navigator>
        )
}

export default AuthStack