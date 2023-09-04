import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
export default function App() {
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toogleTodo(id: string, completed: boolean) {
    console.log("Toggling todo:", id, "to", completed);
    setTodos((currentTodos) => {
      return currentTodos.map((todosItem) => {
        if (todosItem.id === id) {
          return { ...todosItem, completed };
        }
        return todosItem;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todosItem) => todosItem.id != id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toogleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
