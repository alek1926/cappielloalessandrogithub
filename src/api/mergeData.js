import dbData from './mock/dbData.json';
import gitDataRaw from './mock/gitData.json';
import { estraiData } from './estraiData.js';

export const mergeData = () => {
    const data = [];
    let gitData = estraiData(gitDataRaw);
    for (let i in dbData) {
        for (let j in gitData) {
            if (dbData[i]["login"] === gitData[j]["login"]) {
                data.push({ ...dbData[i], ...gitData[j] });
            };
        }
    }
    return data;
}