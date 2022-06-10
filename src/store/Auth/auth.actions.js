import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT
} from "./auth.types";

export const login = (creds) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios.post("https://reqres.in/api/login", creds).then((re) => {
    dispatch({ type: LOGIN_SUCCESS });
  });

  dispatch({ type: LOGIN_ERROR });
};
export const loginout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
