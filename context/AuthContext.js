import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../slices/navSlice";
import { userLogin, userRegister } from "../api/user";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);

  const storeData = async (key , value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("user not saved" , e);
    }
  };



  const loginUser = () => {
    // get response from login route
    const { email, password } = userLogin({
      email: "amitsamui257@gmail.com",
      password: "amitsamui",
    });
    // set the store with the user value
    dispatch(
      setUserProfile({
        email,
        password,
        profileImageURI: "something",
      })
    );
    setLogin("userLoggedIn");
  };

  const registerUser = () => {
    // get response from login route
    const { email, password } = userRegister({
      email: "amitsamui257@gmail.com",
      password: "amitsamui",
    });
    // set the store with the user value
    dispatch(
      setUserProfile({
        email,
        password,
        profileImageURI: "something",
      })
    );
    setLogin("userLoggedIn");
  };

  const isUserLoggedIn = async() => {
    try {
        const value = await AsyncStorage.getItem('my-key');
        // check weather the user has done the payment or not
        if (value !== null) {
            dispatch(
                setUserProfile({
                  email,
                  password,
                  profileImageURI: "something",
                })
              );
        }
      } catch (e) {
        console.log("some error accessing async storage" , e);
      }
  }

  useEffect(() => {
    isUserLoggedIn()
  }, [])
  


  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
