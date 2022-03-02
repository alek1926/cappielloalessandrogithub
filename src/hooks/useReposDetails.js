import { useState, useEffect } from 'react';
import { reposDetails } from '../api/repos';

export const useReposDetails = (props) => {
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
    }, [props.login, props.repoName]);
    return { dettagli, error, isError };
}