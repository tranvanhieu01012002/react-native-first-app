import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style';


const Banner = () => {
    const image = require("../../assets/flat-lay-pills-syringe-with-copy-space1.png" );
    return (
        <View>
            <ImageBackground
                source={image}
                style={styles.banner}
            >
                <Text style={styles.h1}>Save extra on every order</Text>
            </ImageBackground>
        </View>
    )
}

export default Banner;
