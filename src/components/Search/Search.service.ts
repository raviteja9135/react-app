import axios from 'axios';

export const getListData:any =  async function() {
return await axios.get('http://localhost:9080/getAllDocs').then(function (response) {
    return response.data;
})
}

