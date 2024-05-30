import axios from "axios";

const AxiosService = axios.create(
   {baseURL: "hhttps://markdown-viewer-back-end.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
   } 
)

export default AxiosService