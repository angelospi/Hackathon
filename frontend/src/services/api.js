import axios from 'axios';

export default axios.create({
    baseURL: 'https://portal.stg.eugenio.io',
    headers: {
        apikey: 'Au0iNdiXwYDJDaOI7PU40PHYKQri6EBa'
    }
});