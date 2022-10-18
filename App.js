
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductScreen from './src/screens/ProductScreen'
import { View, Text } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <ProductScreen/>
        </SafeAreaView>
    )
}

export default App