import { useState } from 'react'
import './styles.module.scss'

export function Main() {
    const [ task, setTask ] = useState<string>("");
    const [ taskCheck, setTaskCheck ] = useState("");
    const [ itens, setItens ] = useState<string[]>([])

    const editTask = () => {
        
    }

    const deleteTask = () => {
        // const newList = itens.filter((index) => index.id !== id);
 
        // setItens(newList);
    }

    const inputChecked = () => {
        if (taskCheck === "done") {
            setTaskCheck("")
        } else setTaskCheck("done")
    }

    return (
        <main>
            <form id="inputTask"         
                onSubmit={event => {
                event.preventDefault();
                if (task.length > 2) {
                    setItens([...itens, task]);
                }
            }}>
                <input id="task" type="text" value={task} placeholder="Add a new task at list" onChange={event => setTask(event.target.value)}/>
                <button type="submit">
                    <img src="add.svg" alt="add new task"/>
                </button>
            </form>
            <ul id="list">
                {itens.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" onChange={inputChecked}/>
                        <span className={taskCheck}>{todo}</span>
                        <button onClick={() => deleteTask()} style={{ marginRight: '50px' }}>
                            <img src="delete.svg" alt="delete taskd"/>
                        </button>
                        <button onClick={editTask}>
                            <img src="edit.svg" alt="edit taskd"/>
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}