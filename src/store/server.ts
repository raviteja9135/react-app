import axios from 'axios';
import { User } from './userDetailsReducer';

export const setDocument =  async function(data:User) {
await axios.post('http://localhost:9080/addDocument',data).then(function (response) {
    return response.data;
})
}

