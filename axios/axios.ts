import axios from "axios"

const instance = axios.create({
  baseURL: "https://backend-image-proc-production.up.railway.app/process-image/",
  // baseURL: "https://image-processing-api-flask.onrender.com/api/process-image",
})


export default instance

