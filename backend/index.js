const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

let notes = [
    {
        "content": "My name is theFish2",
        "id": 1,
        "important": true
    },
    {
        "content": "My favorite musical is Hamilton",
        "id": 2,
        "important": false
    },
    {
        "content": "My favorite color is blue",
        "id": 3,
        "important": true
    }
]

app.get('/', (request, response) => {
    response.send('<h1> Hello World!! </h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {
        response.json(note)
    }
    else {
        response.send('<p> That note does not exist </p>')
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})


const createID = () => {
    const maxID = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0

    return maxID + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content is missing!'
        })
    }

    const note = {
        content: body.content,
        id: createID(),
        important: body.important || false
    }

    notes = notes.concat(note)
    response.json(note)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
