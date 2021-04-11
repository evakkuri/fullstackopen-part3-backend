const express = require('express')
const app = express()

// Set up morgan library for logging requests and responses
var morgan = require('morgan')

app.use(morgan('tiny', {
  skip: (req, res) => { return req.method === 'POST' }
}))

morgan.token('reqBody', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(
  ':method :url :status :res[content-length] - :response-time ms :reqBody',
  {
    skip: (req, res) => { return req.method !== 'POST' }
  }))

// Set up json handling
app.use(express.json())

// Set up CORS middleware
const cors = require('cors')
app.use(cors())

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-1234567",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/info', (request, response) => {
  const resString = `
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  `

  response.send(resString)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  console.log(person)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0

  if (!request.body.name || !request.body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const newPerson = {
    name: request.body.name,
    number: request.body.number,
    id: generateId(),
  }
  newPerson.id = maxId + 1

  if (persons.map(p => p.name).includes(newPerson.name)) {
    return response.status(400).json({
      error: `Person with name ${newPerson.name} is already in the phonebook`
    })
  }

  persons = persons.concat(newPerson)

  response.json(newPerson)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)

  response.status(204).end()
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
