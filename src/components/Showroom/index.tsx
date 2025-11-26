import React from 'react';
import './Showroom.css';

export const Showroom: React.FC = () => {
    const symbol = '⚝';
    const text = `${symbol} SHOW R00M ${symbol}`;
    return (
        <div className="showroom-container">
            <div className='scrolling-content'>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}