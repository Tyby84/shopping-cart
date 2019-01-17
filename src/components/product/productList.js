import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import './css/productList.scss';

const ProductList = (props) => {
	let listItems = props.items.map((item) =>{
		return <li className="list-items__li" key={item.id}>{item.name} | {item.desc} 
			<button className="list-items-btn"
					onClick={() => props.addToCart(item.name,item.desc, item.id)}
				>Add to cart</button></li>;
	});
	
	return (
		<div>
		<ul className="list-items__ul">{listItems}</ul>
		</div>
	);
}
const mapDispatchToProps = dispatch => {
	return {
		addToCart: (name, desc,id) => dispatch({type: actionTypes.ADDTOCART, itemData:{name:name, desc:desc, id:id}})
	}
}

export default connect(null, mapDispatchToProps)(ProductList);