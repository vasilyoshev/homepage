import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddNewTodo } from 'interfaces';

export const AddTodoForm: React.FC<AddNewTodo> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const submitTodoItem = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleInputChange} />
      <button
        type="submit" 
        onClick={submitTodoItem}>
        Add Todo
      </button>
    </form>
  );
};