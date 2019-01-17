import React from 'react';
import { connect } from 'react-redux';

import './prod-num.scss';

const ProductNumber = props => {
	const Prodlength = props.cartItems.length;
	return (
		<div className="prod-num">
			<span>{Prodlength}</span>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cartItems: state.cartItems
	}
}


export default connect(mapStateToProps)(ProductNumber);