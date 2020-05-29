import React, { useContext } from "react";

import "./collections-overview.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import CollectionsContext from "../../contexts/collections/collections.context";

const CollectionsOverview = () => {
  const collectionsData = useContext(CollectionsContext);
  const collections = Object.keys(collectionsData).map(
    key => collectionsData[key]
  );
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
