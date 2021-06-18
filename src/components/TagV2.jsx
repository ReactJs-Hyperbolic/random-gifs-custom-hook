import React, {useState} from 'react'
import useGif from '../useGif';

const TagV2 = () => {
    const [tag, setTag] = useState('dogs')
    const {gif, fetchGif} = useGif(tag);

    return (
        <>
            <div className='container'>
                <h1>Search {tag} Gif</h1>
                <img src={gif} width='500' alt="random_gif" />
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                <button onClick={() => fetchGif(tag)}>New Gif</button>
            </div>            
        </>
    )
}

export default TagV2
