import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from '../product/product';
import Cart from '../product/incart';
const Header = props => {
	return (
		<Router>
			<div>
				<nav>
				<ul>
				<li><Link to="/">Browse</Link></li>
				<li><Link to="/cart">Shopping Cart</Link></li>
				</ul>
				</nav>
			<Route path="/" exact component={Product} />
			<Route path="/cart" component={Cart} />
		
			</div>
		</Router>
	);
}

export default Header;