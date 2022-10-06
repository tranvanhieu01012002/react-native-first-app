import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Task from '../Tasks'

export default function TaskList() {
    const [todo,setTodo] = useState([
        {
            task: 'have lunch',
            status: 'not yet',
        }, 
        {
            task: 'have lunch',
            status: 'not yet',
        }, 
        {
            task: 'have lunch',
            status: 'not yet',
        }, 
        {
            task: 'have lunch',
            status: 'not yet',
        }, 
        {
            task: 'have lunch',
            status: 'not yet',
        },
    ])
  return (
    <View>
        {todo.map((item,i)=><Task key={i} task={item}></Task>)}
    </View>
  )
}