import React, {useEffect, useState, memo, useMemo} from 'react';
import './css/App.css';
import {getUsers, createUser, deleteUser} from './functions'

function App() {
  const [users, setUsers] = useState([])
  const [newUserName, setUserName] = useState('')
  const [newUserEmail, setUserEmail] = useState('')
  const [newUserId, setUserId] = useState(0)
  const [newUserDate, setUserDate] = useState(new Date())

  const userList = useMemo(async () => {
    console.log('get userList')
    let list;
    getUsers().then(res => {list = res})
    return list
  }, []);

  const addUser = (name, email, sign_date) => createUser(name, email, sign_date).then(() => getUsers().then(res => setUsers(res)))

  const deleteU = (id) => deleteUser(id).then(() => getUsers().then(res => setUsers(res)))

  useEffect(() => {
    getUsers().then(res => setUsers(res))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <LabelAndInput name="name" onChange={setUserName} />
        <LabelAndInput name="email" onChange={setUserEmail} />
        <LabelAndInput name="date" onChange={setUserDate} type="date" />
        <button onClick={() => addUser(newUserName, newUserEmail, newUserDate)}>add user</button>
        <label>delete user by id</label>
        <input onChange={(e) => setUserId(e.target.value)} type="number" id="id" name="id" required />
        <button onClick={() => deleteU(newUserId)}>delete user</button>
        <MemoizedUsersMap users={users} length={users.length} />
      </header>
    </div>
  );
}
export default App;

const LabelAndInput = (name, onChange, type = 'text') => {
  return (<>
    <label>{name}</label>
    <input onChange={(e) => onChange(e.target.value)} type={type} id={name} name={name} required />
</>)
}

const UsersMap = ({users, length}) => {
  console.log(users, 'users memo')
  return (<div>{users.map(user => {
    return (<div key={user.id}>name: {user.name}, id: {user.id}  email: {user.email} date: {user.sign_date}</div>)
  })}</div>)
}

const MemoizedUsersMap = React.memo(UsersMap)
