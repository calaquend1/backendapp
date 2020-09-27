import React, {useEffect, useState, memo} from 'react';
import './App.css';

const getUsers = () => fetch('http://localhost:3001/users', {method: 'GET'})
.then(async (res) => await res.json())

const createUser = (name, email) => fetch(`http://localhost:3001/users?name=${name}&email=${email}`,
{
  method: 'POST',
})


function App() {
  const [users, setUsers] = useState([{name: 1, id: 1}])
  const [newUserName, setUserName] = useState('')
  const [newUserEmail, setUserEmail] = useState('')
  const [newUserId, setUserId] = useState(0)

  const addUser = (name, email) => createUser(name, email).then(() => getUsers().then(res => setUsers(res)))

  const deleteUser = (id = 0) => fetch(`http://localhost:3001/users/:${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id: Number(id)})
  }).then(() => getUsers().then(res => setUsers(res)))

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
        <button onClick={() => addUser(newUserName, newUserEmail)}>add user</button>
        <label>delete user by id</label>
        <input onChange={(e) => setUserId(e.target.value)} type="number" id="email" name="email" required />
        <button onClick={() => deleteUser(newUserId)}>delete user</button>
        <MemoizedUsersMap users={users} length={users.length} />
      </header>
    </div>
  );
}
export default App;


const UsersMap = ({users, length}) => {
  console.log(users, 'users memo')
  return (<div>{users.map(user => {
    return (<div key={user.id}>name: {user.name}, id: {user.id}  email: {user.email}</div>)
  })}</div>)
}

const MemoizedUsersMap = React.memo(UsersMap)
