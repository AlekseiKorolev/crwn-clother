import React from "react";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TestWarning
} from "./checkout.styles";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      <span>TOTAL: ${cartTotal}</span>
    </Total>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 Exp: 01/(current year) - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
