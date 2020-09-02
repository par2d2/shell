import axios from 'axios';

export default async function ApiCall(url, type){
    let response = await axios({
        method:type,
        url: url
    })
    return response;
}