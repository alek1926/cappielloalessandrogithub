import axios from 'axios';
import { API_DOMAIN, API_PREFIX, API_REPODETAIL, API_REPOS } from '../config/configApi';


export const axiosGet = () => {
  const promise = axios.get(API_DOMAIN + API_PREFIX + API_REPOS);
  const dataPromise = promise.then(response => response.data);
  return dataPromise;
}

export const reposDetails = async (owner, repo) => {
  let response = null;
  response = await axios.get(
    API_DOMAIN + API_PREFIX + API_REPODETAIL 
      + owner 
      + "&repo=" + repo);
  return response.data;
}
export const listRepos = async () => {
  try{
  const response = await axios.get(API_DOMAIN + API_PREFIX + API_REPOS );
  return response;}
  catch(error){
    throw error;
  }
}