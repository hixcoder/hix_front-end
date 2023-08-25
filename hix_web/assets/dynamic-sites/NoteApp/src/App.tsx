import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
export default function App() {
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([]);

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
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todosItem) => {
          return (
            <li key={todosItem.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => toogleTodo(todosItem.id, e.target.checked)}
                  checked={todosItem.completed}
                />
                {todosItem.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todosItem.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
