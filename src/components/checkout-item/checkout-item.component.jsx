import React from "react";
import { connect } from "react-redux";

import { ReactComponent as PlusIcon } from "../../assets/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus-icon.svg";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`${name} item`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="icon minus" onClick={() => removeItem(cartItem)}>
          <MinusIcon />
        </div>
        <span className="value">{quantity}</span>
        <div className="icon plus" onClick={() => addItem(cartItem)}>
          <PlusIcon />
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
