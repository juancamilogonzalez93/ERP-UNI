import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Asegúrate que coincida con tu backend
});

export const login = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data; // { token, user }
};