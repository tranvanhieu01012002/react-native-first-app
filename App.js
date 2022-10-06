import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Bar from './src/components/Bar';
import Header from './src/components/Header';
import TaskList from './src/components/TaskList';



const App = () => {
    return (
        <View>
            <ScrollView>
                <Header/>
                <Bar/>
                <TaskList/>
            </ScrollView>
        </View>
    );
};  

export default App;
