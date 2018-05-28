import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_SURVEYS } from "./types";

// the old code. lets refactor! using async await
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get("/api/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

// check current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// take the token sent by stripe, and send it to our api server
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
