require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
morgan.token('POST', (req) => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POST'))


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
  Person.find({}).then(person => {
    response.json(person)
  })
})

// app.get('/info', (request, response) => {
//   response.send(
//     `<div>Phonebook has info for ${people.length} people</div>
//     <p>${Date()}</p>`
//   )
// })

app.get('/api/people/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

// app.delete('/api/people/:id', (request, response) => {
//   const id = Number(request.params.id)
//   people = people.filter(p => p.id !== id)
//   response.status(204).end()
// })

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
  } 

 // else if (Person.find({name: body.name})) {
 //   return response.status(400).json({
 //     error: 'name must be unique'
 //   })
 // }

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
