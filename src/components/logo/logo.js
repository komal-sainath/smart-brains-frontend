import React from 'react';
import Tilt from 'react-tilt';
import 'tachyons';
import './logo.css';
import face from './face.svg';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 50, width: 80 }} >
            <div className="Tilt-inner"><img src={face} alt='logo'></img></div>
            </Tilt>
        </div>
		);
}

export default Logo;