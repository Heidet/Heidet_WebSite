import axios from 'axios';


export default axios.create({
    baseURL:  "https://apibeta.aria.fr/py/v2/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }, 
})