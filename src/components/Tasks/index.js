import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function Task() {
    return (
        <View style={styles.task}>
            <Text style={styles.order}>01</Text>
            <Text>Clean the floot</Text>
            <Text>Done</Text>
        </View>
    )
}