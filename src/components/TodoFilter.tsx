import React from "react";
import {Todo} from "./TodoList";

interface Props {
  todos: Todo[], 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoFilter:React.FC<Props> = ({todos, setTodos}) =>  {
  const undoneItems:Todo[] = todos.filter(todo => todo.done === false);
  const handleAll = () => {
    setTodos(todos.map(todo => todo));
  }
  const handleActive = () => {
    const fiteredActive = todos.filter(todo => todo.done === false)
    setTodos(fiteredActive)};
  const handleCompleted = () => {
    const filteredCompleted = todos.filter(todo => todo.done === true);
    setTodos(filteredCompleted)};
  const handleClear = () => {
    const filterClear = todos.filter(todo => todo.done === false);
    setTodos(filterClear)};
  return <div className="flex justify-between text-sm">
    <p>{undoneItems.length} items left</p>
    <div className="flex gap-3">
      <button onClick={handleAll}>All</button>
      <button onClick = {handleActive}>Active</button>
      <button onClick = {handleCompleted}>Completed</button>
    </div>
    <button onClick= {handleClear}>Clear completed</button>
  </div>;
}
