import React from "react";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";

function Main() {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}

export default Main;
