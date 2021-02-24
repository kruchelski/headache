import * as StorageService from './StorageService';
import * as HttpService from './HttpService';
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

export const getAccessTokenFromServer = async (username, password) => {
	const requestBody = {
		grant_type: 'password',
		username,
		password
	}

	const loginResponse = await HttpService.makeRequest(
		'login', requestBody, null, null
	)

	// If the response is missing some data then set as error
	if (!loginResponse || !loginResponse.data || !loginResponse.data.access_token) {
		throw new Error('Failed to get access token from the server');
	}

	return loginResponse.data.access_token;
}

export const getUserInfoFromServer = async (username) => {
	const userInfoResponse = await HttpService.makeRequest(
		'getUserInfo', null, null, null
	)

	// If the response is missing some data then set as error
	if (!userInfoResponse || !userInfoResponse.data || !userInfoResponse.data.id ||
		!userInfoResponse.data.username || !userInfoResponse.data.email || !userInfoResponse.data.name) {
		throw new Error('Failed to get user data from the server');
	}

	// Creates an user object
	const data = userInfoResponse.data;
	const user = {
		id: data.id,
		username: data.username,
		name: data.name,
		email: data.email,
		url: data.web_url || null,
		avatar: data.avatar_url || null,
	}

	return user;
}