import { useState } from 'react';
import Image from 'next/image';
import addIcon from './icons/add.png'
import editIcon from './icons/edit.png'
import deleteIcon from './icons/delete.png'
import style from './styles.module.scss'

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
        if (index !== -1) {
            itens.splice(index, 1);
        }
        setTaskDeleted(`${item} was been deleted`)
    }

    return (
        <main>
            <form className={style.form}        
                onSubmit={event => {
                event.preventDefault();
                if (task.length > 2) {
                    setItens([...itens, task]);
                    setTask("")
                }
            }}>
                <input id="task" type="text" value={task} placeholder="Add a new task at list" onChange={event => setTask(event.target.value)}/>
                <button type="submit">
                    <Image src={addIcon} alt="add new task" />
                </button>
            </form>

            <p style={{textAlign: "center", marginTop: "8px", color: "#ff6161"}}>{taskDeleted}</p>

            <ul className={style.ul}>
                {itens.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>

                        <div>
                            <button 
                                onClick={() => deleteTask(item, index)} 
                            >
                                <Image src={deleteIcon} alt="delete taskd"/>
                            </button>

                            <button onClick={() => editTask(item, index)}>
                                <Image src={editIcon} alt="edit taskd"/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}