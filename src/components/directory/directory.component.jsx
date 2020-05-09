import React, { useState } from "react";

import "./directory.styles.scss";
import DIRECTION_DATA from "./direction.data";

import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [sections, setSections] = useState(DIRECTION_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
