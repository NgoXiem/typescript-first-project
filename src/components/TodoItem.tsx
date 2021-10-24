import React from 'react';
import { XIcon } from "@heroicons/react/outline";
import {Todo} from "./TodoList"

export interface Props {
    id: number, 
    name: string, 
    done: boolean
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export const TodoItem: React.FC<Props> = ({id, name, done, todos, setTodos}) =>  {
  const handleClick = () => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newArr = todos.map(todo => {
      if(todo.id === id) {
        return {id, name, done:e.target.checked}
      } else {
        return todo
      }
    });
    setTodos(newArr);
  }
    return (
        <div className="flex items-center justify-between border-b-2">
            <div className="flex items-center gap-4 my-3">
              <input type="checkbox" onChange={(e) => handleChange(e)} checked={done}/>
              <p className={done ? "line-through opacity-50" : ""}>{name}</p>
            </div>
            <button className="justify-end" onClick = {handleClick}>
              <XIcon className="w-6 text-red-500"/>
            </button>
          </div>
    )
}