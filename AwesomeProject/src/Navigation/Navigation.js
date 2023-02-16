import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Stack/HomeStack';
import BottomTabNavigation from './BottomTabNavigation';


export default function Navigation() {
    return (
        <NavigationContainer>
          <BottomTabNavigation/>
        </NavigationContainer>
    )
}