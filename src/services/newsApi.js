import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.REACT_APP_API_KEY;

const newsApi = {
  getArticles: async (params) => {
        const { category, page } = params;
        const url = `${ BASE_URL }/top-headlines?country=in&category=${ category }&page=${ page }&apiKey=${ API_KEY }`;
        const response = await axios.get( url );
        // console.log(response)
        return response.data;
    },
};

export default newsApi;