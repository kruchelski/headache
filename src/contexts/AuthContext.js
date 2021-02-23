import React, { createContext, useState } from 'react';
import { HttpService, StorageService, UserService } from '../services';
import { gitlab, removeDefaultHeader, setDefaultHeaders } from '../configs';

const AuthContext = createContext();

const authContextApi = ( authState, setAuthState ) => {

  const loadStorageData = async () => {
    try {
      // Retrieves the user and the token from the localStorage
      const storageUser = await UserService.getUserFromStorage();
      const storageToken = await UserService.getTokenFromStorage();

      if (!storageToken) {

        try {
          await signOut()

        } catch (err) {
          throw err;
        }

      } else {

        // If the access token is stored, set the default header

        // Request user data
        
        // Is found user data, creates a user object and stores

        // Sets the user and the access token to the authState
          
      }

    } catch (err) {

      throw err;

    }
  }
}