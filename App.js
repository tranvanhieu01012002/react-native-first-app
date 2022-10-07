import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

    const [count,setCount] = useState(0);

    const increaseCount = ()=>{
        setCount(count + 1)
    }
    return (
        <View style={styles.container}>
            <Text>Value: {count}</Text>
            <TouchableOpacity 
                onPress={increaseCount} 
                style={styles.button}
                >
                    <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
        justifyContent: 'center'
    },
    button: {
        padding: 30,
        backgroundColor: 'blue',
        textAlign: 'center'
    }
});

export default App;
