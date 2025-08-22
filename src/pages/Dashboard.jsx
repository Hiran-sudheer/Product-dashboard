import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Loader from "../components/Loader";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Dashboard() {
  const { products, loading, error, createProduct, editProduct, removeProduct } = useProducts();
  const [form, setForm] = useState({ title: "", price: "", category: "" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      editProduct(editingId, form);
    } else {
      createProduct(form);
    }
    setForm({ title: "", price: "", category: "" });
    setEditingId(null);
  };

  const handleEdit = (p) => {
    setForm({ title: p.title, price: p.price, category: p.category });
    setEditingId(p.id);
  };

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Product Management</h1>

      <input
        type="text"
        placeholder="Search by title or category..."
        className="border px-3 py-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ProductForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editing={!!editingId}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <ProductTable
          products={filtered}
          onEdit={handleEdit}
          onDelete={removeProduct}
        />
      )}
    </div>
  );
}
