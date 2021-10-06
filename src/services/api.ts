 import axios from "axios"
 const api = axios.create({
     baseURL: "https://maratonas-academy-dribble.herokuapp.com/"
 })

 export default api