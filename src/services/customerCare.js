import {sendGet, sendPost, sendPatch, sendDelete} from './axios';
import {ENDPOINT} from "../config/endpoint";

export const getCustomerCare = (payload) => sendGet(ENDPOINT.customerCare, payload)
export const addCustomerCare = (payload) => sendPost(ENDPOINT.customerCare, payload)
export const patchCustomerCare = (id, payload) => sendPatch(`${ENDPOINT.customerCare}/${id}`, payload)
export const deleteCustomerCare = (id) => sendDelete(`${ENDPOINT.customerCare}/${id}`)