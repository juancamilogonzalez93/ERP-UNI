import { api } from './api'; // Tu instancia de axios configurada

export const TeamService = {
  async getAll() {
    const response = await api.get('/team');
    return response.data;
  },
  async create(data) {
    const response = await api.post('/team', data);
    return response.data;
  },
  async update(id, data) {
    const response = await api.put(`/team/${id}`, data);
    return response.data;
  },
  async delete(id) {
    const response = await api.delete(`/team/${id}`);
    return response.data;
  }
};