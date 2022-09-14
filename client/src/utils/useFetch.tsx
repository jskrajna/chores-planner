// import { config } from '@chores-app/config/index.js';
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [status, setStatus] = useState<{
        loading: boolean,
        error?: string,
        data?: any
    }>({ loading: false });

    const fetchNow = (url: string) => {
        (async () => {
            setStatus({ loading: true });
            let response = await fetch(`http://localhost:4000/${url}`);
            if (!response.ok) {
                setStatus({ error: response.statusText, loading: false });
                throw new Error(`the status is ${response.status}`);
            }
            const data = await response.json();
            setStatus({ loading: false, data: data });
        })();
    }

    useEffect(() => {
        if (url) {
            fetchNow(url);
        }
    }, [url])

    return { ...status, fetchNow };
}

export default useFetch;