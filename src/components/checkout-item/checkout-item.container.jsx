import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import compose from "lodash.flowright";

import CheckoutItem from "./checkout-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation removeItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const CLEAR_ITEM_FROM_CART = gql`
  mutation clearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
}) => {
  return (
    <CheckoutItem
      cartItem={cartItem}
      addItem={item => addItemToCart({ variables: { item } })}
      removeItem={item => removeItemFromCart({ variables: { item } })}
      clearItem={item => clearItemFromCart({ variables: { item } })}
    />
  );
};

export default compose(
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItemFromCart" }),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }),
  graphql(CLEAR_ITEM_FROM_CART, { name: "clearItemFromCart" })
)(CheckoutItemContainer);
