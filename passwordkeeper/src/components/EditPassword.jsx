// src/components/EditPassword.jsx
import React, { useState } from 'react';

const EditPassword = ({ password, onSave, onCancel }) => {
  const [title, setTitle] = useState(password.title);
  const [pass, setPass] = useState(password.pass);

  const handleSave = () => {
    onSave({ ...password, title, pass });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />{' '}
      <br />
      <label>Password:</label>
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        required
      />{' '}
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </div>
  );
};

export default EditPassword;
