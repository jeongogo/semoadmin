import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Signup from "../../components/auth/Signup";

const SignupPage = () => {
  const handleSubmit = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
  }

  return (
    <Signup handleSubmit={handleSubmit} />
  )
}

export default SignupPage