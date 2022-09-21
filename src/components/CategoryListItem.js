import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
import img from '../assets/commit-git.png'
export default function CategoryListItem() {
    return (
        <View>
            <Text style={styles.text}>CategoryListItem</Text>
            <Image style={styles.cateImage} source={img}/>
        </View>
    );
}
const styles = StyleSheet.create({
    cateImage:{
        width:50,
        height:50
    },
    text: {
        color: 'red'
    }
})