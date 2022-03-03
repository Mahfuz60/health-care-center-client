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
  getIdToken,
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
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  //register user
  const registerUser = (email, password, history, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        const newUser = { email, displayName: name };
        setUser(newUser);

        //Save user to database
        saveUser(email, name, "POST");

        //send name to creation firebase and update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        history.replace("/");
        setAuthError("");
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

  //Google sign in user
  const googleSignIn = (location, history) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        //save user to database
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
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
        //verify Admin to firebase JWT
        getIdToken(user)
          .then((idToken) => {
            setToken(idToken);
          })
          .catch((err) => {});
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

  //save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {});
  };

  //make sure admin role user email

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    registerUser,
    loginUser,
    googleSignIn,
    logOut,
    loading,
    authError,
    admin,
    token,
  };
};

export default useFirebase;
