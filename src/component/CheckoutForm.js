import { Component } from "react";

class CheckoutForm extends Component {
  render() {
    const { handleUserInput, handleNewOrder } = this.props;

    return (
      <body id="form">
        <label htmlFor="checkout">
          <h3>Checkout</h3>
        </label>
        <form onSubmit={handleNewOrder} action="" id="checkout">
          <div>
            <label htmlFor="firs-name">
              <div>First Name</div>
            </label>
            <input onInput={handleUserInput} type="text" name="first" id="firs-name" />
          </div>
          <div>
            <label htmlFor="last-name">
              <div>Last Name</div>
            </label>
            <input onInput={handleUserInput} type="text" name="last" id="last-name" />
          </div>
          <div>
            <label htmlFor="email">
              <div>Email</div>
            </label>
            <input onInput={handleUserInput} type="text" name="Email" id="email" />
          </div>
          <div>
            <label htmlFor="credit">
              <div>Credit Card</div>
            </label>
            <input onInput={handleUserInput} type="text" name="credit" id="credit" />
          </div>
          <div>
            <label htmlFor="zip">
              <div>Zip Code</div>
            </label>
            <input onInput={handleUserInput} type="text" name="Zip" id="zip" />
          </div>

          <button type="submit">Buy Now</button>
        </form>
      </body>
    );
  }
}

export default CheckoutForm;
