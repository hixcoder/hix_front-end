import { useState } from "react";

export default function NewTodoForm(props: { onSubmit: any }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" action="" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
