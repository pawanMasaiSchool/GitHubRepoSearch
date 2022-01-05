// successful login
export const LOGIN_S = "LOGIN_S";

// failed login
export const LOGIN_F = "LOGIN_F";

export const loginSuccess = (tkn) => {
  return {
    type: LOGIN_S,
    payload: tkn
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_F,
    payload: error
  };
};
