import React from 'react';

const InCart = props => {
	let cartItems = props.inItems.map(item => {
		return (<li key={item.id}>{item.name} | {item.desc}</li>);
	});
	return (
		<div>
		<ul>{cartItems}</ul>
		</div>
	);
}
export default InCart;