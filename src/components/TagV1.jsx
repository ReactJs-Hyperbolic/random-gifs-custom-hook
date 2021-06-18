import React, {useState, useEffect} from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const TagV1 = () => {
    const [tag, setTag] = useState('')
    const [gif, setGif] = useState('')

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        // Getting a response from axios.get - destructure the data out of it.
        const {data} = await axios.get(url)
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }

    function handleClick() {
        fetchGif(tag);
    }

    useEffect(() => {
        fetchGif('dogs');
    }, [tag]);

    return (
        <>
            <div className='container'>
                <h1>Search {tag} Gif</h1>
                <img src={gif} width='500' alt="random_gif" />
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                <button onClick={handleClick}>Search Gif</button>
            </div>            
        </>
    )
}


