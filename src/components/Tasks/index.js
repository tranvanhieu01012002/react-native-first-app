import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function Task(props) {
    return (
        <View style={[styles.item,{backgroundColor: props.bgColor}]}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}
