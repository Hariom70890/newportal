// services/newsApi.js
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

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