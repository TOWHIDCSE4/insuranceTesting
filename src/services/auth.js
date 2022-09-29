import { sendGet, sendPost } from './axios';

export const loginApi = (payload) => sendPost('/login', payload);
export const resetPasswordApi = (payload) =>
  sendPost('/reset-password', payload);
export const changePasswordApi = (payload) =>
  sendPost('/change-password', payload);
export const getMeApi = (payload) => sendGet('/users/me', payload);
