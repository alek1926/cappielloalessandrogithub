import axios from 'axios';

export const reposDetails = async (owner, repo) => {
    let response = null;
    response = await axios.get(
        "https://github-funtion-ttf.azurewebsites.net/api/repodetailgithub?owner=" 
        + owner 
        + "&repo=" + repo);
    return response.data;
}