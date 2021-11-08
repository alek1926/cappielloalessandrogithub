import dbData from './mock/dbData.json';
import gitData from './mock/gitData.json';

export const mergeData = () => {
    const data = [];
    for (let i in dbData) {
        for (let j in gitData) {
            if (dbData[i]["login"] === gitData[j]["login"]) {
                data.push({ ...dbData[i], ...gitData[j] });
            };
        }
    }
    return data;
}