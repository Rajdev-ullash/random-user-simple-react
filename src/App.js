import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './Components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))

      .catch(error => console.log(error))
  }, []);
  const handleAddPeople = (peoples) =>{
      const newPeople =[...people, peoples];
      setPeople(newPeople);
      
  }
  const countryWrapper = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: 'lightBlue' };
  return (
    <div className="App">
      <h1>Total User: {users.length}</h1>
      <h3>People Added: {people.length}</h3>
      
      <div style={countryWrapper}>
        {
          users.map(user => <User user={user} handleAddPeople={handleAddPeople}></User>)
        }
      </div>
    </div>
  );
}

export default App;
