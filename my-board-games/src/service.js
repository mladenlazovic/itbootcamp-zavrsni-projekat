import axios from 'axios'

export const getAllUsers = () => axios.get('http://localhost:3005/users')
export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{ username,email,password })
export const getAllGames = () => axios.get('http://localhost:3005/games')
export const getGameById = (id) => axios.get(`http://localhost:3005/games/${id}`)