import { useState, useEffect } from 'react';
import { reposDetails } from '../api/repos';
import {userMock} from "../api/user.js";

export const useReposDetails = (props) => {
    const [user] = useState(userMock);
    const [dettagli, setDettagli] = useState(null);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await reposDetails(props.login, props.repoName);
                if (res) setDettagli(res);
            } catch (error) {
                setError(error.message);
                setIsError(true);
            }
        }
        loadData();
    }, user.session === true ? [props.login, props.repoName] : "", "");
    return { dettagli, error, isError };
}