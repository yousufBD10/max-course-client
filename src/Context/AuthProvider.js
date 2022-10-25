import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const loginEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  const sinInGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signOutGoogle = () => {
    setLoading(true);
    return signOut(auth);
  };

  const GithubSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribes = onAuthStateChanged(auth, (currentUser) => {
      console.log("user inside state change", currentUser);
      if (currentUser === null || currentUser?.emailVerified) {
        setUser(currentUser);
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribes();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    sinInGoogle,
    signOutGoogle,
    createUser,
    loginEmailPass,
    loading,
    verifyEmail,
    setLoading,
    GithubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
