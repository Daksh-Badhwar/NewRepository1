// src/components/PasswordForm.jsx
import React, { useState } from 'react';

const PasswordForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPassword = { 
      id: new Date().getTime(),
      title,
      pass
    };
    onAdd(newPassword);
    setTitle('');
    setPass('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <label>Title:</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      /> <br />
      <label>Password:</label>
      <input 
        type="text" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
        required 
      /> <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default PasswordForm;
