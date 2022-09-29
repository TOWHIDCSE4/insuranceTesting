import { sendGet, sendPost, sendPatch, sendDelete } from "./axios";
import { ENDPOINT } from "../config/endpoint";

export const addSurvey = (payload) => sendPost(ENDPOINT.surveys, payload);
export const getSurvey = (id) => sendGet(`${ENDPOINT.surveys}/${id}`);
export const getCustomerHistory = (id) => sendGet(`${ENDPOINT.surveys}/customer-history/${id}`);
export const getCompanyHistory = (id) => sendGet(`${ENDPOINT.surveys}/company-history/${id}`);
