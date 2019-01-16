import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './productList';
import InCart from './incart';
import './product.css';

class Product extends Component {
	
	render() {
		return (
			<div className="product-list">
			<ProductList items={this.props.product}	/>
			<InCart inItems={this.props.addedProduct} />
			</div>
		)
	}
	
}

const mapStateToProps = state => {
	return {
		product: state.product,
		addedProduct: state.cartItems
	}
}

export default connect(mapStateToProps)(Product);