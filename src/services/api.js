// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ajusta según tu backend
});

export const getTeam = () => api.get('/team');
export const createMember = (data) => api.post('/team', data);
export const updateMember = (id, data) => api.put(`/team/${id}`, data);
export const deleteMember = (id) => api.delete(`/team/${id}`);