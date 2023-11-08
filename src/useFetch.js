import { useState, useEffect } from 'react';

// Custom hooks in react must start with use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // Using setTimeout to simulate a delay in getting data from a server for simulation purposes
        setTimeout(() => {
        console.log('use effect ran');
        // console.log(blogs);
        // console.log(name);
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);

        return () => abortCont.abort();
    }, []);

    return { data, isPending, error };
};

export default useFetch;