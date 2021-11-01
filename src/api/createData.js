import dbData from './mock/dbData.json';
import gitData from './mock/gitData.json';

export const createData = () => {
    const data = [];
    for (let i = 0; i < dbData.length; i++) {
        let element = { ...dbData[i], ...gitData[i] };
        data.push(element)
    }
    return data;
}