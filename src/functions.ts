
export const getUsers = () =>
  fetch('http://localhost:3001/users', {method: 'GET'}).then(async (res) => await res.json())

export const createUser = (name, email, sign_date) =>
  fetch(`http://localhost:3001/users?name=${name}&email=${email}&sign_date=${sign_date}`, { method: 'POST' })

export const deleteUser = (id = 0) =>
  fetch(`http://localhost:3001/users/:${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id: Number(id)})
  })
