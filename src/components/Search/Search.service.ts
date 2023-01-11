import axios from 'axios';
import { User } from '../../store/userDetailsReducer';

export const getListData:any =  async function() {
return await axios.get('http://localhost:9080/getAllDocs').then(function (response) {
    return response.data;
})
}

