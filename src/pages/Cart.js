import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);

  const cartElements = cartItems.map((img) => <CartItem key={img.id} img={img} />);
  const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [btnText, setBtnText] = useState("Place Order");

  function placeOrder() {
    setBtnText("Ordering...");
    setTimeout(() => {
      console.log("Order placed");
      setBtnText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElements}
      <p className="total-cost">Total: {totalCost}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{btnText}</button>
        ) : (
          <p>You have no items in your cart</p>
        )}
      </div>
    </main>
  );
}
