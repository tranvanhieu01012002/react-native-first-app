
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductScreen from './src/screens/ProductScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.screen name="product" component={ProductScreen}/>
                    <Stack.screen name="product1" component={ProductScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App