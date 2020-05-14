import DIRECTION_DATA from "./directory.data";

const INITITAL_STATE = DIRECTION_DATA;

const directoryReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
