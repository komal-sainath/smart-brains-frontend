import React from 'react';
import 'tachyons';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return (
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p className='f4 link dim black underline pa3 pointer' onClick= {() => onRouteChange('signout')}>SIGN OUT</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p className='f4 link dim black underline pa3 pointer' onClick= {() => onRouteChange('signin')}>SIGN IN</p>
				<p className='f4 link dim black underline pa3 pointer' onClick= {() => onRouteChange('Register')}>REGISTER</p>
			</nav>
		);
	}
}

export default Navigation;