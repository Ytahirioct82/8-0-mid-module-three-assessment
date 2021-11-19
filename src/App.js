import "./App.css";

import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import GarageItems from "./component/GarageItems";
import CheckoutForm from "./component/CheckoutForm";
import Cart from "./component/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [],
      productsData: productData,
      selectedProduct: [],
      userInput: "",
    };
  }
  handleProductClick = (product) => {
    this.setState({
      selectedProduct: [...this.state.selectedProduct, product],
    });
  };

  handleUserInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      userInput: { ...this.state.userInput, [name]: value },
    });
  };

  getTotal = () => {
    let sub = 0;
    this.state.selectedProduct.forEach((item) => {
      sub += item.price;
    });
    const tax = sub * 0.05;
    const total = sub + tax;
    return total.toFixed(2);
  };

  handleNewOrder = (event) => {
    event.preventDefault();
    if (this.state.userInput.credit.length < 16) {
      alert("Credit card number is not valid");
    } else if (this.state.userInput.Zip.length < 5) {
      alert("Zip code is not valid");
    } else if (
      this.state.userInput.first &&
      this.state.userInput.last &&
      this.state.userInput.Email &&
      this.state.userInput.credit &&
      this.state.userInput.Zip
    ) {
      alert("Purchase complete" + " " + "$" + this.getTotal());
    } else {
      alert("Input is not valid!");
    }
  };

  render() {
    console.log(this.state.userInput.credit);
    const { productsData } = this.state;
    const products = productsData.map((pro) => {
      return <GarageItems key={pro.id} product={pro} handleProductClick={this.handleProductClick} />;
    });

    return (
      <div className="app" id="app-container">
        <h1>My Garage Sale</h1>
        <div id="dinosaur-list-container">{products}</div>
        <CheckoutForm handleUserInput={this.handleUserInput} handleNewOrder={this.handleNewOrder} />
        <Cart selectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}

export default App;
