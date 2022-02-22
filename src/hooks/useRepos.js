import { useState, useEffect } from "react";
import { listRepos } from "../api/repos.js";

export const useRepos = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await listRepos();
      setRepos(res.data.results);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadData();
  }, []);
  return {
    repos,
    loading,
    loadData,
    isError,
  };
};
