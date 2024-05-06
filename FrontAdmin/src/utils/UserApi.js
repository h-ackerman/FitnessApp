import { API_BASE_URL, ACCESS_TOKEN } from './constants';
import axios from 'axios';

export const request = async (options) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    
    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
    }

    const axiosOptions = {
        headers: headers,
        ...options // Merge additional options
    };

    try {
        const response = await axios(axiosOptions);
        console.log('Server response:', response.data);
        return response;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Server error:', error.response.data);
            return error.response;
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Request setup error:', error.message);
        }
        return Promise.reject(error);
    }
};

// get logged user info
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}