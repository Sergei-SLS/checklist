import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export const App = () => {
  const tasks1: Task[] = [
    { id: 1, title: 'HTML', isDone: true},
    { id: 2, title: 'JS', isDone: true},
    { id: 3, title: 'React', isDone: false},
    { id: 4, title: 'Redux', isDone: false},
  ]

  const tasks2: Task[] = []
  return (
      <>
        <div className="app">
          <TodolistItem title="What to learn" tasks={tasks1} data='14.09.2026'/>
          <TodolistItem title="Songs" tasks={tasks2}/>
        </div>
      </>
  )
}

export default App
