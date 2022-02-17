import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newNoteObj) => {
    const request = axios.post(baseUrl, newNoteObj)
    return request.then(response => response.data)
}

const update = (id) => {
    axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    create,
    update
}
