import { getReposOf } from './getReposOf.js';

export const estraiData = (repos) => {
    const users = [];
    repos["data"].forEach(e => users.push((e["owner"]["login"])));
    const usersSet = new Set(users);

    const gitData = [];
    usersSet.forEach(user => {
        let reposData = getReposOf(user, repos["data"]);
        const obj = { login: user, repos: reposData[0], creation_date: reposData[1], last_update: reposData[2] };
        gitData.push(obj);
    });
    
    return gitData
}