import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './productList';
import InCart from './incart';
import './css/productList.scss';
import './css/incart.scss';
import './css/main.css';

class Product extends Component {
	
	render() {
		return (
			<div className="main-style">
			<div className="product-list">
			<ProductList items={this.props.product}	/>
			</div>
			<div className="shopping-cart">
			<InCart inItems={this.props.addedProduct} />
			</div>
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