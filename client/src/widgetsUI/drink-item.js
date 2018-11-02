import React from 'react';
import {Link} from 'react-router-dom'

const DrinkItem = (item) => {
    return (
        <Link to={`/drinks/${item._id}`} className='drink-item'>
            <div className="Drink-header">
                <h2>{item.name}</h2>
            </div>
            <div className='drink-items'>
                <div className='drink-author'>{item.style}</div>
                <div className='drink-bubble'>
                    <strong>Location:</strong> {item.locationMade}
                </div>
                <div className='drink-bubble'>
                    <strong>Review:</strong> {item.review}
                </div>
                <div className='drink-bubble'>
                    <strong>Rating:</strong> {item.rating}/5
                </div>

            </div>
        </Link>
    );
}

export default DrinkItem;
