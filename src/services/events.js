import {sendGet, sendPost, sendPatch, sendDelete} from './axios';
import {ENDPOINT} from "../config/endpoint";

export const getEvents = (payload) => sendGet(ENDPOINT.events, payload)
export const addEvents = (payload) => sendPost(ENDPOINT.events, payload)
export const patchEvents = (id, payload) => sendPatch(`${ENDPOINT.events}/${id}`, payload)
export const deleteEvents = (id) => sendDelete(`${ENDPOINT.events}/${id}`)
export const sendEvents = (payload) => sendPost(ENDPOINT.eventsSend, payload)