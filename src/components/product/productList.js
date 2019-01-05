import React from 'react';

import './productList.css';

const ProductList = (props) => {
	let listItems = props.items.map((item) =>{
		return <li className="list-items__li" key={item.id}>{item.name} | {item.desc}</li>;
	});
	
	return (
		<div>
		<ul className="list-items__ul">{listItems}</ul>
		</div>
	);
}

export default ProductList;