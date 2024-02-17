import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com';

export const options = {
    url: BASE_URL,
    params: {
      maxResults: 50
    },
    headers: {
      'X-RapidAPI-Key': '30b0b33028msh2937a31360f3520p1b43b5jsnd3c6c94754c0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }