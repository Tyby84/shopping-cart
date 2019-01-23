import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

const Header = props => {
	return (
		
			<div>
				<nav className="navigation">
				<ul className="navigation__ul">
				<li className="navigation__li"><Link to="/">Browse</Link></li>
				<li className="navigation__li"><Link to="/cart">Shopping Cart</Link></li>
				</ul>
				</nav>
			
		
			</div>
		
	);
}

export default Header;