import { SIGN_IN, SIGN_OUT } from "./constants";

// import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const VerifyAccount = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users`);

//   dispatch({ type: "VERIFY_ACCOUNT", payload: response.data });
// };

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
