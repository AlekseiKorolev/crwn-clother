import React from "react";

import {
  CollectionPageContainer,
  Title,
  Items,
  CollectionItemWithStyles
} from "./collection.styles";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItemWithStyles key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
