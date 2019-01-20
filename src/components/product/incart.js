import React from 'react';
import './css/incart.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

const InCart = props => {
	let cartItems = props.inItems.map(item => {
		return (
			<div>
			<li className="shopping-cart__li" key={item.id}>
			<h1>{item.name}</h1>
			<h3>{item.desc}</h3>
			<button onClick={() => props.removeItem(item.id)}>Remove item</button>
			</li>
			</div>
		);
	});
	return (
		<div>
		<ul className="shopping-cart__ul">{cartItems}</ul>
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		removeItem: (id) => dispatch({type:actionTypes.REMOVEITEM, payload:{id:id}})
	}
}

export default connect(null, mapDispatchToProps)(InCart);