import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT
} from "./auth.types";

const intitialState = {
  loading: false,
  error: false,
  isAuth: false,
  token: ""
};

function authreducer(state = intitialState, { type, payload }) {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true, error: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token
      };
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGOUT: {
      return { ...state, isAuth: false };
    }
    default:
      return state;
  }
}

export default authreducer;
