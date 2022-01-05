import { LOGIN_F, LOGIN_S } from "./action";

const initialState = {
  isAuth: false,
  tkn: ""
};

const authReducer = (currentState = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_S: {
      return {
        ...currentState,
        isAuth: true,
        tkn: payload
      };
    }
    case LOGIN_F: {
      return {
        ...currentState,
        isAuth: false,
        tkn: ""
      };
    }

    default: {
      return currentState;
    }
  }
};

export default authReducer;
