import React from 'react';

const ProductList = (props) => {
	let listItems = props.map((item) =>{
		return <li>{item.name}</li>;
	});
	
	return (
		<div>
		<ul>{listItems}</ul>
		</div>
	);
}

export default ProductList;