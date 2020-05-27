import React from "react";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
