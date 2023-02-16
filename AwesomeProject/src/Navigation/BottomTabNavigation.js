import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './Stack/HomeStack';
import ProfileScreen from '../screens/Profil/ProfileScree';
import Carte from '../screens/Card/Carte';
import Chat from '../screens/Chat/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileStack from './Stack/ProfileStack';
const Tab = createBottomTabNavigator();


export default function BottomTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Card') {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Card" component={Carte} />
            <Tab.Screen name="Chat" component={Chat} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
}