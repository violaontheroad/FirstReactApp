import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      name:"Viola",
      email: "viola@gmail.com"
    },
    {
      name:"Mineiro",
      email: "bigode@gmail.com"
    }
  ];

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
