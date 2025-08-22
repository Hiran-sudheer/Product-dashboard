import axios from "axios";

const API = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(API);
export const addProduct = (product) => axios.post(API, product);
export const updateProduct = (id, product) => axios.put(`${API}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API}/${id}`);
