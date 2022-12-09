import axios from "axios"
import { TFetchUsers } from "../interfaces"

const apiUrl = 'https://jsonplaceholder.typicode.com'

export const fetchUsers: TFetchUsers = async () => {
  return axios.get(`${apiUrl}/users`)
}