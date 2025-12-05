import React from 'react';
import { Showroom } from '../Showroom';

const Header: React.FC = () => {
    return (
        <div>
            <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'start',
                paddingLeft: '2rem'
            }}
        >
            <div
                style={{

                }}
            >
                <h1>
                    <i>LA</i>BOR<i>WE</i>ST no-PIPO
                </h1>
            </div>
        </div>
        <Showroom/>
        </div>
    )
}

export default Header;
