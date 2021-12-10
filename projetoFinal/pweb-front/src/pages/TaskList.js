import React, {useState, useEffect} from 'react'
import {getTasks} from '../services/TaskService'

export default function TaskList(){
    
    const [task, setTasks] = useState([])
    const [taskError, setTaskError] = useState('')
    
    useEffect(() => {
        reloadTask()
    },[])

    const reloadTask = () =>{
        setTasks(getTasks())
    //         .then(res => setTasks(res))
    //         .catch(err => setTaskError(err)) 
    }
    
    return (
        <div>
            {taskError
            ? (
                <div>
                    <h2>Something is wrong, 
                        notifique o seus administrador de sistemas</h2>
                </div>
            )
            :task.map((a) => a )}
        </div>
    )
}