import { View, Text } from 'react-native'
import React from 'react'
import Product from './Product'
import styles from './style'

const MainProduct = () => {
    return (
        <View>
            <Text>All product</Text>
            <View style={styles.row}>
                <Product/>
                <Product/>
            </View>
            <View style={styles.row}>
                <Product/>
                <Product/>
            </View>
            <View style={styles.row}>
                <Product/>
                <Product/>
            </View>
           
        </View>
    )
}

export default MainProduct