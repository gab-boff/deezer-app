const axios = require('axios');


export const deezerChart = async (indexNumber) => {
    try {
        const resp = await axios.get(`http://localhost:8080/https://api.deezer.com/chart?limit=20&index=${indexNumber}`);
        return (resp);
    } catch (err) {
        return (err.message);
    }
};

export const deezerSearch = async (searchInput, indexNumber) => {
    try {
        const resp = await axios.get(`http://localhost:8080/https://api.deezer.com/search?q=${searchInput}&index=${indexNumber}&limit=20`);
        return (resp);
    } catch (err) {
        return (err.message);
    }
};
