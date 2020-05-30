import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import compose from "lodash.flowright";

import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => (
  <CheckoutPage cartItems={cartItems} cartTotal={cartTotal} />
);

export default compose(graphql(GET_CART_ITEMS_AND_TOTAL))(
  CheckoutPageContainer
);
