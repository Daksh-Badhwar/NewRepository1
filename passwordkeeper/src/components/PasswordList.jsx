// src/components/PasswordList.jsx
import React from 'react';
import PasswordItem from './PasswordItem';

const PasswordList = ({ passwords, onDelete, onEdit }) => {
  return (
    <ul>
      {passwords.map((password) => (
        <PasswordItem
          key={password.id}
          password={password}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default PasswordList;
