import { useEffect, useState } from "react";
import { api } from "../api";

export function useApi(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const isNotAborted = () => !signal.aborted;

    const doFetch = async () => {
      if (isNotAborted()) setLoading(true);

      try {
        const { data } = await api.get(url, options);

        if (isNotAborted()) {
          setResponse(data);
        }
      } catch (error) {
        if (isNotAborted()) {
          setError(error);
        }
      } finally {
        if (isNotAborted()) {
          setLoading(false);
        }
      }
    };

    doFetch();

    // Event when is component destroy!!!
    return () => {
      abortController.abort();
    };
  }, []);

  return { response, error, loading };
}
