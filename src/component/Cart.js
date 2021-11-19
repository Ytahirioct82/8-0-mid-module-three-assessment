import { Component } from "react";

class Cart extends Component {
  render() {
    const { selectedProduct } = this.props;

    let chosenItems = selectedProduct.map((item, i) => (
      <li key={item.name + i}>
        {item.name}: {"$" + item.price.toFixed(2)}
      </li>
    ));
    let Sub = 0;
    let tax = 0;
    let total = 0;

    //
    selectedProduct.forEach((element) => {
      Sub += element.price;
    });

    //
    if (Sub) {
      tax = Sub * 0.05;
      total = tax + Sub;
    }
    return (
      <div id="cart">
        <ul>
          <h3>Cart</h3>
          {chosenItems}
        </ul>
        <h3>{"Subtotal:" + " " + "$" + Sub.toFixed(2)}</h3>
        <h3>{"Tax:" + " " + "$" + tax.toFixed(2)}</h3>
        <h3>{"Total:" + " " + "$" + total.toFixed(2)}</h3>
      </div>
    );
  }
}

export default Cart;
