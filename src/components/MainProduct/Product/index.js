import { View, Text,Image } from 'react-native'
import React from 'react';
import styles from './style';

const Product = () => {
    const image = require('../../../assets/image_20.png');
    return (
        <View style={styles.container}>
            <Text style={styles.sale}>sale</Text>
            <View style={styles.product}>
                <Image
                        source={image}
                    />
                <Text>This is a test product</Text>
            </View>
                <View style={styles.info}>
                    <Text style={styles.price}>$12.4</Text>
                    <Text style={styles.vote}>*2.0</Text>
                </View>
        </View>
    )

}

export default Product;