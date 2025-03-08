import axios from "axios"

const instance = axios.create({
  baseURL: "https://backend-image-proc-production.up.railway.app/process-image/"
})


export default instance

