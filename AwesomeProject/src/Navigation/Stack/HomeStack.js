import React from 'react'

import HomeScreen from '../../screens/Home/HomeScreen';
import ProductScreen from '../../screens/Product/ProductScreen';
import SearchScreen from '../../screens/Search/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
        </Stack.Navigator>
    );
}