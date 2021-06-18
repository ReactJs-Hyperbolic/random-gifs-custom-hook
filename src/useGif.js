import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = tag => {
  const [gif, setGif] = useState('');

  const fetchGif = async tag => {
    // If there is a tag, request url includes tag, if not, just use url
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif('dogs');
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
