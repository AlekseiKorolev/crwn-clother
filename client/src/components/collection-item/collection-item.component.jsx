import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
  CustomButtonWithStyles
} from "./collection-item.styles";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomButtonWithStyles onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonWithStyles>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
