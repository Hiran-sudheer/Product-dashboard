import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Price ($)</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{p.title}</td>
              <td className="px-4 py-2">{p.category}</td>
              <td className="px-4 py-2">{p.price}</td>
              <td className="px-4 py-2 flex gap-3 justify-center">
                <button
                  className="text-green-600 hover:text-green-800"
                  onClick={() => onEdit(p)}
                >
                  <FiEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete(p.id)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500 italic">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
