import React from "react";

import { CartItemContainer, ItemDetails, Field } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetails>
      <Field>{name}</Field>
      <Field>{price}</Field>
      {quantity} x ${price}
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
