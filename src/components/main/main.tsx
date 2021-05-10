import { useState } from 'react'
import './styles.module.scss'

export function Main() {
    const [ task, setTask ] = useState<string>("");
    const [ taskCheck, setTaskCheck ] = useState("");
    const [ itens, setItens ] = useState<string[]>([])

    function editTask(item: string, index: number) {
        setTask(item)
        deleteTask(index)
    }

    function deleteTask(index: number) {
        console.log(itens)
        if (index !== -1) {
            itens.splice(index, 1);
        }
        inputChecked()
    }

    function inputChecked() {
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
                    setTask("")
                }
            }}>
                <input id="task" type="text" value={task} placeholder="Add a new task at list" onChange={event => setTask(event.target.value)}/>
                <button type="submit">
                    <img src="add.svg" alt="add new     task"/>
                </button>
            </form>
            <ul id="list">
                {itens.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button 
                            onClick={() => deleteTask(index)} 
                            style={{ marginRight: '50px' }}
                        >
                            <img src="delete.svg" alt="delete taskd"/>
                        </button>
                        <button onClick={() => editTask(item, index)}>
                            <img src="edit.svg" alt="edit taskd"/>
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}