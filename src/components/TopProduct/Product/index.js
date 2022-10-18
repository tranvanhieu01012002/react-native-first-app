import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './style';
const Product = (props) => {
    // const image = require('../../../assets/image_133.png');
    return (
        <View style={styles.container}>
            <Image 
                source={props.image}
            />
            <Text>{props.title}</Text>
        </View>
    ) 
}

export default Product;