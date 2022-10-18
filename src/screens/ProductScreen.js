import { View, Text } from 'react-native'
import React from 'react'
import styles from '../assets/screenStyle';
import Banner from '../components/Banner';
import TopProduct from '../components/TopProduct';

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            <Banner/>
            <TopProduct/>
        </View>
    )
}

export default ProductScreen;