import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/screenStyle';

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
    }) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
        {values.map((value) => (
            <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}
            >
            <Text
                style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
                ]}
            >
                {value}
            </Text>
            </TouchableOpacity>
        ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
        </View>
    </View>
);

export default PreviewLayout;