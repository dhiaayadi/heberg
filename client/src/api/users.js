import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: VITE_API_URL ? `${VITE_API_URL}/api/users` : '',
  withCredentials: true,
});

//-----------GET ALL USERS (requires admin token cookie)
export const getAllUsers = async () => {
  return await api.get('/get-all-users');
};

//  GET USER BY ID (requires admin token cookie)
export const getUserById = async (id) => {  
  return await api.get(`/get-user-by-id/${id}`);
};

// DELETE USER BY ID (requires admin token cookie)
export const deleteUser = async (id) => {
  return await api.delete(`/delete-user/${id}`);
};