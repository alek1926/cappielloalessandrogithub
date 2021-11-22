import axios from 'axios';

export const listRepos = async () => {
    const response = await axios.get('https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos');
    return response;
}