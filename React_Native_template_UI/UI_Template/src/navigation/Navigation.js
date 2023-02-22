import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './Stack/AuthStack'


const Navigation =()=>{
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Navigation;