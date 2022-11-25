import axios from 'axios';


export default axios.create({
    baseURL:  "https://",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }, 
})