import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
	return (
		
			<div>
				<nav>
				<ul>
				<li><Link to="/">Browse</Link></li>
				<li><Link to="/cart">Shopping Cart</Link></li>
				</ul>
				</nav>
			
		
			</div>
		
	);
}

export default Header;