import React from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating = ({ rating }) => {
    const star = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {
                star.map((star) => (
                    <span key={star} style={{ color: star <= rating ? 'gold' : 'gray' }}>
                        <FaStar fontSize={'13px'} />
                    </span>
                ))
            }
        </div>
    )
}

export default StarRating