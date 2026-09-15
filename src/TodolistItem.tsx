import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    data?: string
}

export const TodolistItem = ({title, tasks, data}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>{tasks.map(task => task.title)}</div>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                    <p>Tasks no</p>
                ) : (
                <ul>
                    {tasks.map(tasks => {
                        return (
                            <li key={tasks.id}>
                                <input type="checkbox" checked={tasks.isDone}/>
                                <span>{tasks.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}

            <div>
               <Button title={'All'}/>
               <Button title={'Active'}/>
               <Button title={'Completed'}/>
            </div>
            <div>{data}</div>
        </div>
    )
}