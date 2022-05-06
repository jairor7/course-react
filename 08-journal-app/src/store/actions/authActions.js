import { getAuth, signInWithPopup } from "firebase/auth";
import { authProvider } from "../../firebase/firebaseConfig";
import { authTypes } from "../types";

export const startLoginAction = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loginAction(12345, "Jairo Rodriguez"));
    }, 3500);
  };
};

export const startGoogleLoginAction = () => {
  return (dispatch) => {
    console.log("startGoogleLoginAction");
    const auth = getAuth();
    signInWithPopup(auth, authProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginAction(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginAction = (uid, displayName) => ({
  type: authTypes.LOGIN,
  payload: {
    uid,
    displayName,
  },
});
