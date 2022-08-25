// import { config } from '@chores-app/config/index.js';

const fetchData = async (url: string) => {
    let response = await fetch(`http://localhost:4000/api/${url}`);
    if (!response.ok) {
        throw new Error(`the status is ${response.status}`)
    }
    let data = await response.json();
    return data;
}

export { fetchData }