import React, {useEffect, useState, memo} from 'react';
import './css/App.css';
import {getUsers, createUser, deleteUser} from './functions'

function App() {
  const [users, setUsers] = useState([])
  const [newUserName, setUserName] = useState('')
  const [newUserEmail, setUserEmail] = useState('')
  const [newUserId, setUserId] = useState(0)
  const [newUserDate, setUserDate] = useState(new Date())

  const addUser = (name, email, sign_date) => createUser(name, email, sign_date).then(() => getUsers().then(res => setUsers(res)))

  const deleteU = (id) => deleteUser(id).then(() => getUsers().then(res => setUsers(res)))

  useEffect(() => {
    getUsers().then(res => setUsers(res))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <label>name</label>
        <input onChange={(e) => setUserName(e.target.value)} type="text" id="name" name="name" required />
        <label>email</label>
        <input onChange={(e) => setUserEmail(e.target.value)} type="text" id="email" name="email" required />
        <label>date</label>
        <input onChange={(e) => {setUserDate(e.target.value); console.log(e,e.target.value)}} type="date" id="date" name="date" required />
        <button onClick={() => addUser(newUserName, newUserEmail, newUserDate)}>add user</button>
        <label>delete user by id</label>
        <input onChange={(e) => setUserId(e.target.value)} type="number" id="email" name="email" required />
        <button onClick={() => deleteU(newUserId)}>delete user</button>
        <MemoizedUsersMap users={users} length={users.length} />
      </header>
    </div>
  );
}
export default App;


const UsersMap = ({users, length}) => {
  console.log(users, 'users memo')
  return (<div>{users.map(user => {
    return (<div key={user.id}>name: {user.name}, id: {user.id}  email: {user.email} date: {user.sign_date}</div>)
  })}</div>)
}

const MemoizedUsersMap = React.memo(UsersMap)
