import React from 'react';
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="mt-5 font-sans max-w-screen-sm flex flex-col gap-10 justify-center items-center mx-auto">
     <h1 className="text-red-500 text-8xl">todos</h1>
     <TodoList></TodoList>
    </div>
  );
}

export default App;
