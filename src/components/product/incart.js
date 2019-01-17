import React from 'react';
import './css/incart.scss';

const InCart = props => {
	let cartItems = props.inItems.map(item => {
		return (<li className="shopping-cart__li" key={item.id}>{item.name} | {item.desc}</li>);
	});
	return (
		<div>
		<ul className="shopping-cart__ul">{cartItems}</ul>
		</div>
	);
}
export default InCart;