/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThirdScreen from './src/screens/ThirdScreen';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="direction" component={FirstScreen} />
            <Tab.Screen name="position" component={SecondScreen} />
            <Tab.Screen name="justifyContent" component={ThirdScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
}
