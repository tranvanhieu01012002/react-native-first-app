import { View, Text } from 'react-native'
import React from 'react';
import styles from './style';

export default function Header() {
    return (
        <View>
            <Text style={styles.text}>To do - List</Text>
        </View>
    )
}