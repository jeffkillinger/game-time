'use client'

import React from 'react';

export type TodoProps = {
  id: number;
  task: string;
  timeValue: number;
  completed: boolean;
};

const TodoItem: React.FC<TodoProps> = ({
  id,
  task,
  timeValue,
  completed,
}) => {
  return (
    <div className="border p-4 mb-2">
      <p className="text-x1">{task}</p>
      <p>{timeValue} minutes</p>
      <p>{completed? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default TodoItem;