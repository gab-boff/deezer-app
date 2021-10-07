const axios = require('axios');


export const deezerChart = async () => {
    try {
        const resp = await axios.get('http://localhost:8080/https://api.deezer.com/chart?limit=300');
        return (resp);
    } catch (err) {
        return (err.message);
    }
};

export const deezerSearch = async (searchInput) => {
    try {
        const resp = await axios.get(`http://localhost:8080/https://api.deezer.com/search?q=${searchInput}&limit=300`);
        return (resp);
    } catch (err) {
        return (err.message);
    }
};