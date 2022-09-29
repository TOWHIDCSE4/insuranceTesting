import { sendDelete, sendGet, sendPost } from './axios';

export const create = (params) => sendPost('transactions', params);
export const getAll = (params) => sendGet('transactions/search', params);
export const remove = (params) => sendDelete('transactions', params);
export const importFile = (params) =>
  sendPost('transactions/bulk-create-upload', params, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
