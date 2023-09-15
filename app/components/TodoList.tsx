'use client'

import React, { useState, useEffect } from 'react';
import TodoItem, { TodoProps } from './TodoItem';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    fetch('/todos.json')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          timeValue={todo.timeValue}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;