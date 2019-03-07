import axios from 'axios';

export const postData = async (url, data) => {
    let getJsonRespdata;
    console.log('Url---', url, 'JSON', data);
    await axios.post(`${url}`, data)
      .then((response) => {
        console.log('Test Respon', response);
        getJsonRespdata = response;
      })
      .catch((error) =>{
        console.log('err',error);
      });
    return getJsonRespdata;
}