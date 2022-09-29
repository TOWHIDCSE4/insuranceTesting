import { sendDelete, sendGet, sendPatch, sendPost } from "../axios";

export const getPotentialCustomersApi = (data) => sendGet("/customers", data);
export const createPotentialCustomersApi = (data) =>
  sendPost("/customer", data);
export const deletePotentialCustomerApi = (data) =>
  sendDelete("/customers", data);
export const getCompaniesApi = () => sendGet("/companies");
export const getPotentialCustomerApi = (data) =>
  sendGet(`customers/${data.customerId}/${data.typeId}`);
export const updatePotentialCustomerApi = (data) =>
  sendPatch(`customers/${data.customerId}`, data);
