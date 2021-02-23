import * as StorageService from './StorageService';
import { STORAGE_KEYS } from '../constants';

export const getTokenFromStorage = async () => {
	try {
		return await StorageService.getItemFromStorage(STORAGE_KEYS.ACCESS_TOKEN);
	} catch (err) {
		return null;
	}
}

export const setTokenInStorage = async (accessToken) => {
  await StorageService.setItemInStorage(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
}

export const getUserFromStorage = async () => {
	try {
		let user =  await StorageService.getItemFromStorage(STORAGE_KEYS.USER);
		if (!user) {
			throw new Error('No user in the async storage');
		}
		return JSON.parse(user);
	} catch (err) {
		return null;
	}
}

export const setUserInStorage = async (user) => {
  await StorageService.setItemInStorage(STORAGE_KEYS.USER, user);
}