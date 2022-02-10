import axios from 'axios'
const baseUrl = 'http://localhost:3001/arrNotes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newNoteObj) => {
    return axios.post(baseUrl, newNoteObj)
}

// const update = (id) => {
//     return axios.delete('${baseUrl}/${id}')
// }

export default {
    getAll: getAll,
    create: create
}