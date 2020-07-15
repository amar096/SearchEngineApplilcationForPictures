import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
            Authorization: 'Client-ID l5JYpn2qah84vRSgGd8wuCEwjY43KXehvBjr4rq22S8'
          }
    
});
