import { LOG_OUT, LOGIN_SUCCESS, LOGIN_TOKEN } from "./actions";

const initialState = {
  token: localStorage.getItem("token")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case LOGIN_TOKEN:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload.user };

    default:
      return state;
  }
};
