import firebaseInitialization from "../pages/LogIn/Firebase/Firebase.int";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

//firebase initialization
firebaseInitialization();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  //Google sign in user

  const googleSignIn = (history, location) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //register user
  const registerUser = (email, password, history, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        const newUser = { email, displayName: name };
        setUser(newUser);

        //send name to creation firebase and update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        setAuthError("");
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //LoginIn User

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;

        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //observe User State change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //logout User
  const logOut = () => {
    setLoading(true);
    setAuthError("");
    signOut(auth)
      .then((result) => {
        //logout successfully
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user,
    registerUser,
    loginUser,
    googleSignIn,
    logOut,
    loading,
    authError,
  };
};

export default useFirebase;
