import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import {Product} from './Product';

export default function TopProduct() {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            image: require('../../assets/image_133.png')
            
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            image: require('../../assets/image_133.png')
            
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
            image: require('../../assets/image_133.png')
        },
    ];

    const renderItem = ({ item }) => (
        <Product title={item.title} image={item.image} />
      );

    return (
        <View>
            <Text>Diabetic Diet</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
        </View>
    )
}
