import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Condition rendering options
  // 1. Element variable
  // 2. ternary operator condition ? true : false;
  // 3. && operator (shorthand)
  // 4. || if na hoy
  let command;
  if (cart.length === 0) {
    command = <h5>Please select at least one item</h5>;
  } else if (cart.length === 1) {
    command = <h5>Please add more</h5>;
  } else {
    command = <h5>Thanks for adding items</h5>;
  }

  return (
    <div>
      <h2>Selected Item: {cart.length}</h2>
      {cart.map(tShirt => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}> X</button>
        </p>
      ))}
      {cart.length === 0 || <h6 className="orange">YAAY! you're buying!!</h6>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3>
          <p>Gift for 3 persons</p>
        </div>
      )}
      {cart.length === 4 && <button className="orange">Review Order</button>}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
    </div>
  );
};

export default Cart;
