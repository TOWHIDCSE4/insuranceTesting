import { sendPost, sendPatch } from './axios';

export const updateUser = (payload) => sendPatch(`users/me/profile`, payload);
export const sendAvatar = (payload) => sendPost(`users/me/avatar-upload`, payload, { headers: { "Content-Type": "multipart/form-data" } });
export const loginApi = (payload) => sendPost('/login', payload);
export const resetPasswordApi = (payload) => sendPost('/reset-password', payload);
export const changePasswordApi = (payload) => sendPost('/change-password', payload);
