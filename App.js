
import React from 'react';
import type {Node} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    } from 'react-native';

    import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CategoryListItem from './src/components/CategoryListItem';
import ButtonComponent from './src/components/ButtonComponent';
import Task from './src/components/Tasks';


const App: () => Node = () => {

    return (
        <View>
            <Text>Hello Mr neeee Hieu</Text>
            <CategoryListItem/>
            <ButtonComponent/>
            <Button
            title='Press me'
            onPress={()=>Alert.alert("Hello nefff")}
            />
            <Task/>
        </View>
    );
};  


export default App;
