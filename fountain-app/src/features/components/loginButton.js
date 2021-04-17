import React from "react";
import {login} from "../profile/profileSlice"; 
import { useDispatch} from 'react-redux';
//import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
    const dispatch = useDispatch();
  //const  loginWithRedirect  = useAuth0();

  async function fetch() {
    dispatch(login());
  } 

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => fetch()
      }
    >
      Sign Up
    </button>
  );
};

/*        loginWithRedirect({
          screen_hint: "signup",
        })
*/
export default SignupButton;
