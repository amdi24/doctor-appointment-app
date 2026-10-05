import {useEffect,useState,} from "react";
export function useFetch(url) {
const [data, setData] =useState(null);
const [loading, setLoading] =useState(true);
const [error, setError] =useState(null);
useEffect(() => {const controller = new AbortController();
  async function load() {setLoading(true);
      setError(null);
      try {

          await new Promise((resolve) =>
          setTimeout(resolve, 1000)
        );

        const response = await fetch(url, {
          signal: controller.signal,
          // to test not docter 
        // const response = await fetch("/wrongfile.json", {
  // signal: controller.signal,
});
        if (!response.ok) {throw new Error(`Request failed`);}
        
          const result =await response.json();
          setData(result);}
           catch (err) {

        if (err.name !=="AbortError") {
          setError(err.message || "Something went wrong");}} 
        
        finally {
          if (!controller.signal.aborted) {
          setLoading(false);
        }

      }
    }
    load();
    return () => {controller.abort();};
}, [url]);
return {
    data,
    loading,
    error,
  };
}