import axios from "axios";
import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS
} from "./feed.types";

export const getFeedsAPI = () => (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  axios
    .post("http://localhost:8080/feeds")
    .then((r) => {
      dispatch({ type: GET_FEEDS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEEDS_ERROR });
    });
};
