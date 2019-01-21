import React, { Component } from 'react';
import Header from './components/header/header';
import Product from './components/product/product';
import ProductNumber from './components/product-number/prod-num';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header />
        <Product />
		<ProductNumber />
      </div>
    );
  }
}

export default App;
