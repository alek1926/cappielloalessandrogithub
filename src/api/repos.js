import { mergeData } from './mergeData';

export const listRepos = () => {
    const obj = [];
    mergeData().forEach(element => obj.push(element));
    return obj;
}