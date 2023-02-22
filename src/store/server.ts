import axios from 'axios';
import { User } from './userDetailsReducer';

export const setDocument =  async function(data:User) {
return await axios.post('http://localhost:9080/addDocument',data).then(function (response) {
    return response.data;
})
}

export const getUser = async function (data:any) {
    return await axios.post('http://localhost:9080/checkCredentials', data).then(function(response) {
        return response.data[0];
    });
}

