import axios from 'axios';
/*
export const axiosGet = async () => {
  try {
    const resp = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos')
    return resp.data.results;
  } catch (err) {
    console.log(err);
  };
}
*/
export const axiosGet = () => {
  const promise = axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos');
  const dataPromise = promise.then(response => response.data);
  return dataPromise;
}