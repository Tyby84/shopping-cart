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
			<button className="incart-btn" onClick={() => props.removeItem(item.id)}>Remove item</button>
			</li>
			</div>
		);
	});

	
	if(cartItems == 0){
		return (
			<div>
			<p>The shopping cart is empty...</p>
			</div>
		);
	} else {
	return (
		
		<div>
		<ul className="shopping-cart__ul">{cartItems}</ul>
		</div>
	);
	}


}

const mapStateToProps = state => {
	return {
		inItems: state.cartItems
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeItem: (id) => dispatch({type:actionTypes.REMOVEITEM, payload:{id:id}})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InCart);