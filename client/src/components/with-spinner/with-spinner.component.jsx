import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrappedComponent => ({ isLoading, ...rest }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...rest} />;
};

export default WithSpinner;
