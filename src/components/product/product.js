import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './productList';

class Product extends Component {
	
	render() {
		return (
			<div>
				<ProductList 
					id={this.product.id}
					name={this.product.name}
					/>
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