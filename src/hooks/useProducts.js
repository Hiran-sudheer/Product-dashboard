import { useEffect, useState, useCallback } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../api/productService";
import toast from "react-hot-toast";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getProducts();
      setProducts(data);
      setError(null);
    } catch {
      setError("Failed to load products");
      toast.error("Error fetching products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (product) => {
    try {
      const { data } = await addProduct(product);
      setProducts((prev) => [...prev, { ...data, ...product }]);
      toast.success("Product added");
    } catch {
      toast.error("Error adding product");
    }
  };

  const editProduct = async (id, updated) => {
    try {
      await updateProduct(id, updated);
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
      );
      toast.success("Product updated");
    } catch {
      toast.error("Error updating product");
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted");
    } catch {
      toast.error("Error deleting product");
    }
  };

  return {
    products,
    loading,
    error,
    createProduct,
    editProduct,
    removeProduct,
  };
}
