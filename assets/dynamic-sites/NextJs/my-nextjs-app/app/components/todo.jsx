"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function Todo(){
   const [todos, setTodos] = useState({});
   useEffect(() => {
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setTodos(result);
      }
      fetchData();
    
    }, [])
   
    return(
        <div>
            <h1>{todos.title}</h1>
        </div>
    );
}