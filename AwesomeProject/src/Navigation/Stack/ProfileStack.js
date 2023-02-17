import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/Profil/ProfileScree';
import PaymentScreen from '../../screens/Payment/PaymentScreen';
import PositionScreen from '../../screens/Position/PositionScreen';
import SettingScreen from '../../screens/Settings/SettingScreen';
import InfoScreen from '../../screens/Info/InfoScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Position" component={PositionScreen} />
            <Stack.Screen name='Payment' component={PaymentScreen} />
            <Stack.Screen name='Search' component={InfoScreen} />
        </Stack.Navigator>
    );
}