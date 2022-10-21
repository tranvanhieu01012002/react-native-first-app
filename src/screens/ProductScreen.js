import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/screenStyle';
import Banner from '../components/Banner';
import TopProduct from '../components/TopProduct';
import MainProduct from '../components/MainProduct';

const ProductScreen = () => {
    return (
       <ScrollView>
            <View style={styles.container}>
                <Text>Product</Text>
                <Banner/>
                <TopProduct/>
                <MainProduct/>
            </View>
       </ScrollView>
    )
}

export default ProductScreen;