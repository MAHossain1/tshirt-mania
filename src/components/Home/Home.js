import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = selectedItem => {
    const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Already added please like another item");
    }
  };

  const handleRemoveFromCart = selectedItem => {
    const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map(tShirt => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          key={cart._id}
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
