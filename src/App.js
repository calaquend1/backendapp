import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([{name: 1, id: 1}])
  useEffect(() => {
    fetch('http://localhost:3001/users', {method: 'GET'}).then(res => {
      console.log(res)
      setUsers(res)
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <button>add user</button>
        <button>delete user</button>
      </header>
    </div>
  );
}
export default App;

//   {users.map(user => {
//     return (<div>name: {user.name}, id: {user.id}</div>)
//   })
// }
