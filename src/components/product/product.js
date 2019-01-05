import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './productList';
import './product.css';

class Product extends Component {
	
	render() {
		return (
			<div className="product-list">
			<ProductList items={this.props.product}	/>
			</div>
		)
	}
	
}

const mapStateToProps = state => {
	return {
		product: state.product
	}
}

export default connect(mapStateToProps)(Product);