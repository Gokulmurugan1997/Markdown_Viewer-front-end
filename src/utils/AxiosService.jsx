import axios from "axios";

const AxiosService = axios.create(
   {baseURL: "https://markdown-viewer-back-end.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
   } 
)

export default AxiosService