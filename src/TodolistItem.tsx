import {FilterValue, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValue) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask, changeTaskStatus}: Props) => {
    const [taskTitle, setTaskTitle] = useState('')

    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()
        if (taskTitle.trim() !== '') {
            createTask(trimmedTitle)
            setTaskTitle('')
        }
    }

    const createTaskOnEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            createTaskHandler()
        }
    }

    const changeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyDown={createTaskOnEnterHandler}
                />
                <Button title={'+'} onClick={createTaskHandler}/>
            </div>
            {tasks.length === 0 ? (
                <p>Tasks no</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const deleteTaskHandler = () => {
                            deleteTask(task.id)
                        }

                        const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            const newStatusValue = e.currentTarget.checked
                            changeTaskStatus(task.id, newStatusValue)
                        }

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler} />
                                <span>{task.title}</span>
                                <Button title={'❎'} onClick={deleteTaskHandler}/>
                            </li>
                        )
                    })}
                </ul>
            )}

            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    )
}