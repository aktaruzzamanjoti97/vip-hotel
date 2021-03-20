import React, { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState({
        error: "",
        success: false
    })
    const [newUser, setNewUser] = useState(false);
    const handleBlur = (e) =>{

        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber =  /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(e.target.name === 'confirmPassword'){
            const isConfirmPasswordValid = e.target.value.length > 6;
            const isConfirmPasswordHasNumber =  /\d{1}/.test(e.target.value);
            isFieldValid = isConfirmPasswordValid && isConfirmPasswordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) =>{
        if(user.password !== user.confirmPassword){
            alert("Password is incorrect");
        }
        if(newUser && user.email && user.password === user.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    const {displayName, email} = userCredential.user;
                    const signedInUser = {name: displayName, email: email};
                    setLoggedInUser(signedInUser);

                    const newUserInfo = {...user};
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch((error) => {

                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
  });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const {displayName, email} = userCredential.user;
                    const signedInUser = {name: displayName, email: email};
                    setLoggedInUser(signedInUser);
                    // Signed in
                    const newUserInfo = {...user};
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        
        e.preventDefault();
    }


    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email: email};
                setLoggedInUser(signedInUser);
             
                const newUserInfo = {...user};
                newUserInfo.error = "";
                newUserInfo.success = true;
                setUser(newUserInfo);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ...
            });
    }
    return (
       
      <Container style={{height: "1000px"}}>
          <div className="signup-container">
               <h2>{newUser ? "Sign Up" : "Log In"}</h2>
              
                <div className="signup-form d-flex justify-content-center">
                    <form onSubmit={handleSubmit} className="form" action="">
                           
                        {newUser && <input onBlur={handleBlur} name="newUser" type="text" placeholder="Enter Your Name"/>} <br/>
                        <input name="email" onBlur={handleBlur} type="text" placeholder="Your Email Address" required/>
                        <br/>
                        <input name="password" onBlur={handleBlur} placeholder="Enter Your Password" type="password" required/>
                        <br/>
                        {newUser && <input name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Your Password" type="password" required/>}
                        <br/>
                        <input className="submit" type="submit"/>
                    </form>
                </div>
                <div className="text-center">
                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)}/>
                    <label className="pl-3" htmlFor="newUser"> Are You New? Sign Up</label><br/>
                </div>
                <br/>
                <div className="text-center">
                <button onClick={handleGoogleSignIn}className="text-center">Sign in with google</button>
                <br/>
                </div>
                
                {
                    user.success ? <p className="text-center" style={{color: 'green'}}>User {newUser ? "Created" : " Logged In"} Successfully</p> : <p className="text-center" style={{color: 'red'}}>{user.error}</p>
                }
                

          </div>  
          
      </Container>
    );
};

export default Login;