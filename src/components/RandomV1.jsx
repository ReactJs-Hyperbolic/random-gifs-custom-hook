import React, {useState, useEffect} from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const Random = () => {
    const [gif, setGif] = useState('')

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        // Getting a response from axios.get - destructure the data out of it.
        const {data} = await axios.get(url)
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }

    function handleClick() {
        fetchGif();
    }

    useEffect(() => {
        fetchGif();
    }, []);

    return (
        <>
            <div className='container'>
                <h1>Random Gif</h1>
                <img src={gif} width='500' alt="random_gif" />
                <button onClick={handleClick}>New Random Gif</button>
            </div>            
        </>
    )
}


