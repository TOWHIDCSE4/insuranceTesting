import { sendPost, sendGet, sendDelete, sendPut, sendPatch } from "./axios";
import {ENDPOINT} from "../config/endpoint";

export const create = (payload) => sendPost('users', payload)
export const getUser = () => sendGet('api/user/me')
export const getSearch = (payload) => sendGet(ENDPOINT.userSearch, payload)
export const getAll = (page,limit) => sendGet(`/users/search?page=${page}&limit=${limit}`)
export const updateRole = ({id, data}) => sendPatch(`users/${id}/role-and-permission`, data)
export const resetUser = (payload) => sendPost('users/bulk-reinit', payload)
export const uploadFile = (payload) => sendPost('users/bulk-create-upload', payload, {headers: { "Content-Type": "multipart/form-data" }})
export const remove = (payload) => sendDelete(`users/${payload}`)
export const removeUsers = (payload) => sendDelete('users', payload,{headers:{"Content-Type": "application/json"}})
