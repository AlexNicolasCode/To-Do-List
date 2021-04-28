import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import './styles.module.scss'

function Task() {
    const [ taskName, setTaskName ] = useState('');
    const [ checkbox, setCheckbox ] = useState(<input type="checkbox"/>);

    useEffect(() => {
    }, [checkbox])

    const editTask = () => {
    }

    const deleteTask = () => {
        setTaskName('hidden')
    }

    return (
        <div id={taskName}>
            <span>{checkbox}</span>
            {taskName}
            <button onClick={editTask}>
                <img src="edit.svg" alt="edit taskd"/>
            </button>
            <button onClick={deleteTask}>
                <img src="delete.svg" alt="delete taskd"/>
            </button>
        </div>
    )
}

export function Main() {
    const [ task, setTask ] = useState('')
    const [ newTaskElement, setNewTaskElement ] = useState()

    const editTask = () => {
    }

    const deleteTask = () => {
    }

    
    function addTask() {
        const todo = document.getElementById('list');
        const newTask = (
                <li id={task}>
                    <input id={task} type="checkbox"/>
                    <span>{task}</span>
                    <button onClick={deleteTask}>
                        <img src="delete.svg" alt="delete taskd"/>
                    </button>
                    <button onClick={editTask}>
                        <img src="edit.svg" alt="edit taskd"/>
                    </button>
                </li>
        )

        if (task.length > 2) {
            ReactDOM.render(newTask, todo);
            ReactDOM.render(newTask, todo);
            ReactDOM.render(newTask, todo);
        }
    }

    return (
        <main>
            <div id="inputTask">
                <input id="task" type="text" placeholder="Add a new task at list" onChange={event => setTask(event.target.value)}/>
                <button onClick={addTask}>
                    <img src="add.svg" alt="add new task"/>
                </button>
            </div>
            <ul id="list">
            </ul>
        </main>
    )
}