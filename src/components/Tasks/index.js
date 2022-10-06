import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function Task(props) {
    const {task } = props.task;
    return (
        <View style={styles.content}>
            <Text  style={styles.task}>01</Text>
            <Text  style={styles.task}>{task.task}</Text>
            <Text  style={styles.task}>{task.status}</Text>
        </View>
    )
}