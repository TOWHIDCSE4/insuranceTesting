import { sendGet } from './axios';

export const getAll = ({params}) => sendGet('consults/overview', params);
