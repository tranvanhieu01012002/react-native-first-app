import React, {useState} from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
// import styles from './src/assets/globalStyle';
import Bar from './src/components/Bar';
import Header from './src/components/Header';
import TaskList from './src/components/TaskList';
import Task from './src/components/Tasks';
import data from './src/assets/data';
import status from './constants/status';

function App() {

    const [task, setTask] = useState(
        {
            name: '',
            status: status.todo
        },
    );
    const [tasks, setTasks] = useState(data);

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    const edit = index => {
        // let tasksCopy = [...tasks];
        // tasksCopy.splice(index, 1);
        // setTasks(tasksCopy);
        setTask(tasks[index].name);
    };

    const remove = index => {
        
    };

    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks </Text>
            <View style={styles.items}>
                {tasks.map((item, index) => {
                return (
                    <TouchableOpacity 
                        onPress={() => edit(index)} 
                        key={index}>
                    <Task 
                        bgColor={item.status.color}
                        text={item.name} 
                        />
                    </TouchableOpacity>
                );
                })}
            </View>
            </View>
        </ScrollView>
        <KeyboardAvoidingView 
            style={styles.writeTaskWrapper} 
            behavior="height">
            <TextInput
            style={styles.input}
            placeholder="Add new task ..."
            value={task}
            onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={addTask}>
            <View style={styles.addWrapper}>
                <Text>+</Text>
            </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        width: 250,
        borderWidth: 1,
        borderColor: '#C0C0C0',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    addText: {},
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
});

export default App;
