import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';

import InCart from './components/product/incart';
import Header from './components/header/header';
import Product from './components/product/product';
import ProductNumber from './components/product-number/prod-num';
import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
      <div className="App">
		<Header />
        
		<ProductNumber />
		
		<Route path="/" exact component={Product} />
		<Route path="/cart" component={InCart} />
      </div>
		</Router>
    );
  }
}

const mapStateToProps = state => {
	return {
	
		addedProduct: state.cartItems
	}
}

export default connect(mapStateToProps)(App);
