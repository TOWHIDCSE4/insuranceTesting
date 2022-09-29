import { sendGet } from './axios';
import { ENDPOINT } from '../config/endpoint';

export const getAll = (params) =>
  sendGet(ENDPOINT.financeKnowledge.getArticles, params);
export const getMostView = () =>
  sendGet(
    `${ENDPOINT.financeKnowledge.getArticles}/${ENDPOINT.financeKnowledge.getMostView}`
  );
export const view = (id) =>
  sendGet(`${ENDPOINT.financeKnowledge.getArticles}/view/${id}`);

export const getImage = (imageField) =>
  sendGet(`${ENDPOINT.financeKnowledge.getArticles}/image/${imageField}`);
