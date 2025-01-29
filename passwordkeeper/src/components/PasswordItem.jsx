// src/components/PasswordItem.jsx
import React from 'react';

const PasswordItem = ({ password, onDelete, onEdit }) => {
  return (
    <li style={{ marginBottom: '10px' }}>
      {password.title} - {password.pass}
      <button style={{ marginLeft: '10px' }} onClick={() => onDelete(password.id)}>
        Delete
      </button>
      <button style={{ marginLeft: '10px' }} onClick={() => onEdit(password)}>
        Edit
      </button>
    </li>
  );
};

export default PasswordItem;
