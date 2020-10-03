import React from 'react'

interface User {
  name: string;
  email: string;
  sign_date: Date;
  id: number
}

interface UsersMapType {
  users: User[]
  length: number
}

const UsersMap = (props: UsersMapType) => {
  const {users, length} = props
  console.log(users, 'users memo')
  return (<div>{users.map(user => {
    return (<div key={user.id}>name: {user.name}, id: {user.id}  email: {user.email} date: {user.sign_date}</div>)
  })}</div>)
}

const MemoizedUsersMap = React.memo(UsersMap)

export {MemoizedUsersMap}
