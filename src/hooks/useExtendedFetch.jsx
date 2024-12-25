import {useEffect, useState} from "react";

const useExtendedFetch = (method, url, body) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let getData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data2 = res.json();
        console.log(data2.data);

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

export default useExtendedFetch;
