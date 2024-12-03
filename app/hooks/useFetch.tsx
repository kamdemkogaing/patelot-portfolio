/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";

const useFetch = (url: any) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    // Créer un contrôleur
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fectData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        setIsLoading(false);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fectData();

    // Annuler la requête
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
