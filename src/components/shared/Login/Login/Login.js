import React from 'react';
import './Login.css';
import {useHistory,useLocation} from 'react-router-dom';
import logo from '../../../../images/logo.png';
import google from '../../../../images/google.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
   const { signInUsingGoogle,setUser } = useAuth();
   const location = useLocation();
   const history = useHistory();
   console.log(location);
   const redirectUri = location.state?.from || '/';
   console.log(redirectUri);

   const handleGoogleSignIn = () => {
      signInUsingGoogle()
         .then(result => {
            setUser(result.user);
            history.push(redirectUri)
         })
         .catch(err => {
            console.log(err.message);
         })
   }
   return (
      <>
         <div className="login_section">
            <div className="container">
               <div className="logo text-center">
                  <img src={logo} alt="" />
               </div>
               <div className="login_form_wrapper">
                  <div className="login_form">
                     <h2>Login</h2>
                     <div onClick={handleGoogleSignIn} className="google_login">
                        <span><img src={google} alt="" /></span>
                        <h3>Continue with Google</h3>
                     </div>
                     <p>Don’t have an account? <Link to="">Create an account</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;