const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
// const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
morgan.token('POST', (req) => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST'))

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
// const url = 
//   `mongodb+srv://fullstackopen:${password}@cluster0.ucr1f.mongodb.net/phonebookDB?retryWrites=true&w=majority`
// 
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
// 
// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
// })
// 
// const Person = mongoose.model('Person', personSchema)

let people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/api/people', (request, response) => {
  response.json(people)
})

app.get('/info', (request, response) => {
  response.send(
    `<div>Phonebook has info for ${people.length} people</div>
    <p>${Date()}</p>`
  )
})

app.get('/api/people/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = people.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(400).end()
  }
})

app.delete('/api/people/:id', (request, response) => {
  const id = Number(request.params.id)
  people = people.filter(p => p.id !== id)
  response.status(204).end()
})

const generateId = () => {
  const id = Math.floor(Math.random() * 9999)
  return id
}
app.post('/api/people', (request, response) => {
  const body = request.body
  
  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  } else if (!body.number) {
      return response.status(400).json({
	error: 'number missing'
      })
  } else if (people.map(p => p.name).includes(body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  people = people.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
