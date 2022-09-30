import React, {useState} from 'react';
import {
  Alert,
  Button,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './src/assets/globalStyle';
import CategoryListItem from './src/components/CategoryListItem';

const App = () => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [mapping, setMapping] = useState([
        {
        key: 0,
        value: 'test1',
        },
        {
        key: 1,
        value: 'test2',
        },
        {
        key: 2,
        value: 'test3',
        },
        {
        key: 3,
        value: 'test4',
        },
        {
        key: 4,
        value: 'test4',
        },
        {
        key: 5,
        value: 'test4',
        },
        {
        key: 6,
        value: 'test4',
        },
        {
        key: 7,
        value: 'test4',
        },
    ]);
    const showAlert = () => {
        Alert.alert('hi ae');
    };
    const increaseCount = () => {
        setCount(count + 1);
    };
    const onRefresh = () => {
        setRefreshing(true);
        setMapping([
        ...mapping,
        {key: mapping.length + 1, value: 'hiddddhihi' + mapping.length + 1},
        ]);
        setRefreshing(false);
    };
    return (
        <View>
        <ScrollView
            refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }
            style={styles.scrollView}>
            {/* <Text>Please hidden this alert</Text>
                    <Button
                    title='press Me'
                    onPress={showAlert}
                    />
                    <Button style={styles.button}
                    color='pink'
                    
                    title='add press ne '
                    onPress={increaseCount}
                    />
                    <Text>{count}</Text> */}

            {mapping.map(item => (
            <CategoryListItem data={item.value} key={item.key} />
            ))}
            <Text>{name}</Text>
            <TextInput
                onChangeText={(value)=>setName(value)}
                style={styles.input}
                placeholder='Enter your name'
            />
        </ScrollView>
        </View>
    );
};

export default App;
