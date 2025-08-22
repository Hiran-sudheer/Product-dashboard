import { FiPlus } from "react-icons/fi";

export default function ProductForm({ form, setForm, onSubmit, editing }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow mb-6 grid gap-3 md:grid-cols-3"
    >
      <input
        type="text"
        placeholder="Title"
        className="border px-2 py-2 rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        className="border px-2 py-2 rounded"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="border px-2 py-2 rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-blue-600 text-white rounded py-2 px-4 mx-auto hover:bg-blue-700 col-span-full"
      >
        <FiPlus className="mr-2" />
        {editing ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
