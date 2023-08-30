export default function TodoListItem(props: {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: Function;
  deleteTodo: Function;
}) {
  return (
    <li key={props.id}>
      <label>
        <input
          type="checkbox"
          onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
          checked={props.completed}
        />
        <span className="kk">{props.title}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => props.deleteTodo(props.id)}
      >
        Delete
      </button>
    </li>
  );
}
