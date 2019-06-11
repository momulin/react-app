import axios from 'axios';

const instance = axios.create({
    baseURL:'https://m-todo-api.herokuapp.com',
    //baseURL:'localhost:3000'
});

export default instance;