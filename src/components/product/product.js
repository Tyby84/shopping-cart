import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './productList';

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