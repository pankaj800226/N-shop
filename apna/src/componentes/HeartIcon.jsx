import React, { useEffect, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
// import axios from 'axios'
const HeartIcon = () => {

    const [click, setClick] = useState(() => {
        const saveClick = localStorage.getItem('click');
        return saveClick ? JSON.parse(saveClick) : false;
    })

    useEffect(() => {
        localStorage.setItem('click', JSON.stringify(click))
    }, [click])

    const handleHeart = () => {
        setClick(!click)
    }
    const heartColor = click ? 'red' : 'black'
    return (
        <div>
            <AiFillHeart className='heart'
                onClick={handleHeart}
                values={click}
                title='wishlist'
                style={{ color: heartColor, cursor: 'pointer' }}
            />
        </div>
    )
}

export default HeartIcon