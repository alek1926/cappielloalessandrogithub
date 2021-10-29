import data from './mock/data.json';

export const listRepos = () => {
    const obj = [];
    data.forEach(element => obj.push(element));
    return obj;
}