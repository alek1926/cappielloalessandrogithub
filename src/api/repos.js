import { createData } from './createData';

export const listRepos = () => {
    const obj = [];
    createData().forEach(element => obj.push(element));
    return obj;
}