import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
export default function Bar() {
  return (
    <View style={styles.content}>
        <Text  style={styles.task}>#</Text>
        <Text  style={styles.task}>Task</Text>
        <Text  style={styles.task}>Status</Text>
    </View>
  )
}