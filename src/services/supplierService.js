import axios from 'axios';

const API_URL = 'https://tu-api.com/proveedores';

export const fetchSuppliers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createSupplier = async (supplier) => {
  const response = await axios.post(API_URL, supplier);
  return response.data;
};