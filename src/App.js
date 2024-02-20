import React from "react";
import Header from "./components/header";
import Addtodo from "./components/add-todo";
import Todolist from "./components/todo-list";



function App() {
  return (
    <React.Fragment>
      <Header />
      <Addtodo />
      <Todolist />
      </React.Fragment>
  );
}

export default App;
