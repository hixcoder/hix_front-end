import TodoListItem from "./TodoListItem";

export default function TodoList(props: {
  todos: { id: string; title: string; completed: boolean }[];
  toggleTodo: Function;
  deleteTodo: Function;
}) {
  return (
    <ul className="list">
      {props.todos.length === 0 && "No Todos"}
      {props.todos.map((todosItem) => {
        return (
          <TodoListItem
            {...todosItem}
            key={todosItem.id}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </ul>
  );
}
