import React, { createContext, useState } from 'react';
import { StorageService, UserService } from '../services';
import { removeDefaultHeader, setDefaultHeaders } from '../configs';

const AuthContext = createContext();

const authContextApi = (authState, setAuthState) => {

  const loadStorageData = async () => {
    try {
      // Retrieves the user and the token from the localStorage
      const storageUser = await UserService.getUserFromStorage();
      const storageToken = await UserService.getTokenFromStorage();

      if (!storageToken || !storageUser) {

        try {
          await signOut()

        } catch (err) {
          throw err;
        }

      } else {

        // If the access token is stored, set the default header
        setDefaultHeaders('Authorization', `Bearer ${storageToken}`);

        // Sets the user and the access token to the authState
        setAuthState((prevState) => {
          return {
            ...prevState,
            accessToken: storageToken,
            user: storageUser,
            error: null
          }
        })
      }
    } catch (err) {

      throw err;

    }
  }

  const login = async (username, password) => {

    try {
      
      // Gets the token
      const accessToken = await UserService.getAccessTokenFromServer(username, password);

      // Sets the default header
      setDefaultHeaders('Authorization', `Bearer ${accessToken}`);

      // Gets user info
      const user = await UserService.getUserInfoFromServer(username);

      // Stores the user and accessToken
      await UserService.setTokenInStorage(accessToken);
      await UserService.setUserInStorage(user);

      // Updates the state
      setAuthState((prevState) => {
        return {
          ...prevState,
          accessToken,
          user,
          error: null
        }
      })

    } catch (err) {

      throw err;

    }

  }

  const logout = async () => {
    try {

      // Clears the storage
      await StorageService.clearStorage();

      // Remove Header
      removeDefaultHeader('Authorization');

      // Set state
      setAuthState((prevState) => {
        return {
          ...prevState,
          accessToken: null,
          user: null,
          error: null
        }
      })

    } catch (err) {

      throw err;

    }
  }

  const authErrorHandler = (errorObject, defaultMessage = null) => {
    setAuthState((prevState) => {
      return {
        ...prevState,
        error: errorObject?.error ||
        errorObject?.message ||
        defaultMessage ||
        'An unexpected authentication error happened',
      }
    })
  }

  return {
    loadStorageData,
    login,
    logout,
    authErrorHandler
  }
}

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    user: null,
    error: null
  });

  return (
    <AuthContext.Provider
      value={{
        authState,
        ...authContextApi(authState, setAuthState)
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };