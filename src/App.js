import React, {useEffect, useState, memo, useMemo} from 'react';
import './css/App.css';
import {getUsers, createUser, deleteUser} from './functions'
import {LabelAndInput, MemoizedUsersMap} from './components'

function App() {
  const [users, setUsers] = useState([])
  const [newUserName, setUserName] = useState('')
  const [newUserEmail, setUserEmail] = useState('')
  const [newUserId, setUserId] = useState(0)
  const [newUserDate, setUserDate] = useState(new Date())

  const userList = useMemo(async () => {
    console.log('get userList')
    let list;
    getUsers().then(res => {list = res; console.log('list ', list)})
    return await list
  }, []);

  const updateUsers = () => getUsers().then(res => setUsers(res))

  const addUser = (name, email, sign_date) => createUser(name, email, sign_date).then(() => updateUsers())

  const deleteU = (id) => {
    return users.find(item => item.id === id) && deleteUser(id).then(() => updateUsers())
  }

  useEffect(() => {
    updateUsers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <LabelAndInput name="name" onChange={setUserName} />
        <LabelAndInput name="email" onChange={setUserEmail} />
        <LabelAndInput name="date" onChange={setUserDate} type="date" />
        <button onClick={() => addUser(newUserName, newUserEmail, newUserDate)}>add user</button>
        <LabelAndInput name="delete user by id" onChange={setUserId} type="number" />
        <button onClick={() => deleteU(newUserId)}>delete user</button>
        <MemoizedUsersMap users={users} length={users.length} />
      </header>
    </div>
  );
}
export default App;
