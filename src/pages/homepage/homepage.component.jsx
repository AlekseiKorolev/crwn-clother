import React from "react";

import "./homepage.styles.scss";

import { default as Directory } from "../../components/directory/directory.container";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
