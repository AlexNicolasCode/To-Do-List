import { useState } from 'react'
import './styles.module.scss'
import addIcon from '../main/icons/add.svg'
import editIcon from '../main/icons/edit.svg'
import deleteIcon from '../main/icons/delete.svg'

export function Main() {
    const [ task, setTask ] = useState<string>("");
    const [ taskDeleted, setTaskDeleted ] = useState<string>("")
    const [ itens, setItens ] = useState<string[]>([])

    function editTask(item: string, index: number) {
        setTask(item)
        if (index !== -1) {
            itens.splice(index, 1);
        }
    }

    function deleteTask(item: string, index: number) {
        console.log(itens)
        if (index !== -1) {
            itens.splice(index, 1);
        }
        setTaskDeleted(`${item} was been deleted`)
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
                    <img src={addIcon} alt="add new task" />
                </button>
                <p>{taskDeleted}</p>
            </form>
            <ul id="list">
                {itens.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button 
                            onClick={() => deleteTask(item, index)} 
                            style={{ marginRight: '50px' }}
                        >
                            <img src={deleteIcon} alt="delete taskd"/>
                        </button>
                        <button onClick={() => editTask(item, index)}>
                            <img src={editIcon} alt="edit taskd"/>
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}