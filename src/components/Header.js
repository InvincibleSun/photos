import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
  const context = useContext(Context);

  const cartClassName = context.cartItems.length > 0 ? "fill" : "line";

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={`ri-shopping-cart-${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}
