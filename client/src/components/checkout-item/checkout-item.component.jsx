import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  SimpleSpan,
  CustomSpan,
  ValueSpan,
  Arrows,
  RemoveButton
} from "./checkout-item.styles";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <SimpleSpan>{name}</SimpleSpan>
      <CustomSpan>
        <Arrows onClick={() => removeItem(cartItem)}>&#10094;</Arrows>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrows onClick={() => addItem(cartItem)}>&#10095;</Arrows>
      </CustomSpan>
      <SimpleSpan>{price}</SimpleSpan>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
