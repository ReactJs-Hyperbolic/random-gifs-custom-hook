import React from 'react'
import useGif from '../useGif';

const RandomV2 = () => {
    const {gif, fetchGif} = useGif();

    return (
        <>
            <div className='container'>
                <h1>Search Gif</h1>
                <img src={gif} width='500' alt="random_gif" />
                <button onClick={() => fetchGif()}>Search Gif</button>
            </div>            
        </>
    )
}

export default RandomV2
