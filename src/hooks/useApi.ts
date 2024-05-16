import { useState, useEffect, useCallback } from 'react';

// Define the type for the hook state
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Define the type for the hook's return value
interface UseApiReturn<T> extends ApiState<T> {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setOptions: React.Dispatch<React.SetStateAction<RequestInit>>;
  postData: (postUrl: string, postData: any) => Promise<void>;
}

const useApi = <T,>(initialUrl: string, initialOptions: RequestInit = {}): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);
  const [options, setOptions] = useState<RequestInit>(initialOptions);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  const postData = useCallback(async (postUrl: string, postData: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
console.log(response,"response")
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result: T = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, setUrl, setOptions, postData };
};

export default useApi;
