import React, { useContext } from "react";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

import DirectoryContext from "../../contexts/directory/directory.context";

const Directory = () => {
  const { sections } = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
