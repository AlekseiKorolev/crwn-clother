import React from "react";

import {
  CartIconContainer,
  ShoppingIconWithStyles,
  ItemCount
} from "./cart-icon.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconWithStyles />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
