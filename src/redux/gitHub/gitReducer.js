import { STORE_DATA } from "./action";

const initialState = {
  gitData: []
};

const gitReducer = (currenState = initialState, { type, payload }) => {
  switch (type) {
    case STORE_DATA: {
      return {
        gitData: [...payload]
      };
    }

    default: {
      return currenState;
    }
  }
};

export default gitReducer;
