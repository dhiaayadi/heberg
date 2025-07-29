import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: VITE_API_URL ? `${VITE_API_URL}/api/products` : '',
  withCredentials: true,
});

// GET ALL Products
export const getAllProducts = async () => {
  return await api.get('/get-all-products');
};

// GET product BY ID
export const getProductById = async (id) => {
  return await api.get(`/get-product-by-id/${id}`);
};

// DELETE product BY ID
export const deleteProduct = async (id) => {
  return await api.delete(`/delete-product/${id}`);
};

// CREATE product
export const createProduct = async (productData) => {
  try {
    const response = await api.post(
      '/',
      productData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur création produit:", error.response?.data || error.message);
    throw error;
  }
};

// UPDATE product
export const updateProduct = async (id, data) => {
  try {
    const response = await api.put(
      `/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur mise à jour produit:", error.response?.data || error.message);
    throw error;
  }
};

