import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:8000/process-image/"
})


export default instance

