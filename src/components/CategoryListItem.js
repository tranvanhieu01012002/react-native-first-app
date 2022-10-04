import React from 'react';
import {Text, View, Image,StyleSheet} from 'react-native';
import img from '../assets/commit-git.png'
export default function CategoryListItem(props) {
    return (
        <View style={styles.cate}>
            <Text style={styles.text}>CategoryListItem</Text>
            <Text>{props.data}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: 'red'
    },
    cate: {
        height:200
    }
})