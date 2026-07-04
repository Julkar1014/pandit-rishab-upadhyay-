import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/Pujas.css";
import { useNavigate } from "react-router-dom";

export default function Pujas() {
  const [pujas, setPujas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPujas = async () => {
    try {
      const res = await api.get("/pujas");
      setPujas(res.data.data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load pujas");
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this puja?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/pujas/${id}`);

    alert("Puja deleted successfully");

    fetchPujas();
  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message || "Delete failed"
    );
  }
};

  useEffect(() => {
    fetchPujas();
  }, []);

  return (
    <div className="pujas-page">
      <div className="pujas-header">
        <div className="pujas-title">

  <h1>Pujas</h1>

  <p>Manage all pujas from here</p>

</div>

        <div className="pujas-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Pujas..."
            />
          </div>

          <Link
            to="/admin/pujas/add"
            className="add-puja-btn"
          >
            + Add New Puja
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="loading-box">
          Loading...
        </div>
      ) : pujas.length === 0 ? (
        <div className="empty-state">
          <h3>No Pujas Found</h3>
          <p>Add your first puja.</p>
        </div>
      ) : (
        <div className="pujas-table-wrapper">
          <table className="pujas-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Popular</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {pujas.map((puja) => (
                <tr key={puja.id}>
                  <td>{puja.id}</td>

                  <td>
                    <div className="puja-title">
                      {puja.name}
                    </div>
                  </td>

                  <td>{puja.category}</td>

                  <td>
                    <span
                      className={
                        puja.popular
                          ? "status-badge status-active"
                          : "status-badge status-inactive"
                      }
                    >
                      {puja.popular ? "Yes" : "No"}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
  <button
    className="edit-btn"
    onClick={() =>
      navigate(`/admin/pujas/edit/${puja.id}`)
    }
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={() => handleDelete(puja.id)}
  >
    Delete
  </button>
</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}