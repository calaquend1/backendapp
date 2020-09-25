const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/users', cors(), db.getUsers)
app.get('/users/:id', cors(), db.getUserById)
app.post('/users', cors(), db.createUser)
app.put('/users/:id', cors(), db.updateUser)
app.delete('/users/:id', cors(), db.deleteUser)
