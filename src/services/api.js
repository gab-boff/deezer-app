const axios = require('axios');


export const deezerChart = async () => {
    try {
        const resp = await axios.get('http://localhost:8080/https://api.deezer.com/chart?limit=300');
        return (resp);
    } catch (err) {
        return (err.message);
    }
};
