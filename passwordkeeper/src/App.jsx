import React, { useState, useEffect } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';
import TotalPasswords from './components/TotalPasswords';
import Search from './components/Search';
import EditPassword from './components/EditPassword';
import './customStyles.css';  // Import the custom CSS file


function App() {
  const [passwords, setPasswords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingPassword, setEditingPassword] = useState(null);

  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    setPasswords(storedPasswords);
  }, []);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const handleAddPassword = (newPassword) => {
    setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
  };

  const handleDeletePassword = (id) => {
    setPasswords((prevPasswords) => prevPasswords.filter((password) => password.id !== id));
  };

  const handleEditPassword = (updatedPassword) => {
    setPasswords((prevPasswords) =>
      prevPasswords.map((password) =>
        password.id === updatedPassword.id ? updatedPassword : password
      )
    );
    setEditingPassword(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredPasswords = passwords.filter((password) =>
    password.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app-container">  {/* Add the app-container class here */}
      <h2>Password Keeper</h2>
      <div className="center-content">
        <p>Total Passwords: {filteredPasswords.length}</p>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <PasswordForm onAdd={handleAddPassword} />
      {editingPassword ? (
        <EditPassword
          password={editingPassword}
          onSave={handleEditPassword}
          onCancel={() => setEditingPassword(null)}
        />
      ) : (
        <PasswordList
          passwords={filteredPasswords}
          onDelete={handleDeletePassword}
          onEdit={setEditingPassword}
        />
      )}
    </div>
  );
}

export default App;
