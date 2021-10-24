import React, { useState, useEffect } from "react";
import {TodoFilter} from "./TodoFilter";
import {TodoItem} from "./TodoItem";
import { ChevronDownIcon } from "@heroicons/react/outline";
export interface Todo {
    readonly id: number,
    readonly name: string,
    done: boolean,
  }
export default function TodoList() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [list, setList] = useState<Todo[]>([]); 
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), name: todo, done: false}]);
    setTodo("");
  };
  const handleClick = () => {
    const filteredTodos = todos.filter(todo => todo.done === false);
    if(filteredTodos.length > 0) {
      setTodos(todos.map(todoItem => {return {id: todoItem.id, name: todoItem.name, done: true}}));
    } else {
      setTodos(todos.map(todoItem => {return {id: todoItem.id, name: todoItem.name, done: false}}));
    }
  }
  useEffect(() => {
      setList(todos);
}, [todos, checked]);

  return (
    <div className="border p-2 w-full rounded">
      <form className={`flex gap-3 ${todos.length> 0? "border-b-2": ""}`} onSubmit = {(e) => handleSubmit(e)}>
        <ChevronDownIcon className="w-6" onClick={handleClick}/>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="py-2 text-2xl focus:outline-none" 
          onChange={(e) => setTodo(e.target.value.toLowerCase().trim())}
          value={todo}
        />
      </form>
        {list?.map(todoItem => (
          <div key={todoItem.id} className="flex flex-col text-2xl my-3">
          <TodoItem id={todoItem.id} name={todoItem.name} done={todoItem.done} todos={todos} setTodos={setTodos} checked={checked} setChecked={setChecked}/>
        </div>
        ))}
      {todos.length> 0 && <TodoFilter todos={todos} setTodos={setTodos} list={list} setList={setList}></TodoFilter>}
    </div>
  );
}
