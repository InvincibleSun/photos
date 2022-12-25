import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

export default function CartItem({ img }) {
  const { removeFromCart } = useContext(Context);

  const [hovered, ref] = useHover();
  const binClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i className={binClassName} onClick={() => removeFromCart(img.id)} ref={ref}></i>
      <img src={img.url} width="130px" alt="pic" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
