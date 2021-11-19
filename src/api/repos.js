import axios from 'axios';

/*export const listRepos = () => {
    const obj = [];
    mergeData().forEach(element => obj.push(element));
    return obj;
}*/
export const listRepos = async () => {
    const response = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos');
    const data = await response.data.results
    return data
}