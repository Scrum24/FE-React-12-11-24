import {useEffect, useState} from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Fetch error happened");
        }

        const data = await res.json();
        setData(data.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return [data, error, isLoading];
};

export default useFetch;
