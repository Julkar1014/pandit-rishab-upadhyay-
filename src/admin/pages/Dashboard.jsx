import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Dashboard.css";

export default function Dashboard() {

  const [stats, setStats] = useState({
    pujas: 0,
    bookings: 0,
    reviews: 0,
    pending: 0,
  });


  useEffect(() => {
    loadDashboard();
  }, []);

  const admin = JSON.parse(localStorage.getItem("admin"));
const firstName = admin?.name?.split(" ")[0] || "Admin";

const loadDashboard = async () => {
  try {
    const [pujas, bookings, reviews] = await Promise.all([
      api.get("/pujas"),
      api.get("/bookings"),
      api.get("/reviews"),
    ]);

    setStats({
      pujas: pujas.data.data.length,
      bookings: bookings.data.data.length,
      reviews: reviews.data.data.length,
    });

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Dashboard
      </h1>
<p className="dashboard-subtitle">
  Welcome Back {firstName} 👋
</p>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Pujas</h3>
          <h1>{stats.pujas}</h1>
        </div>

        <div className="stat-card">
          <h3>Total Bookings</h3>
          <h1>{stats.bookings}</h1>
        </div>

        <div className="stat-card">
          <h3>Reviews</h3>
          <h1>{stats.reviews}</h1>
        </div>

      </div>
<div className="quick-actions">

  <h2>Quick Actions</h2>

  <div className="action-grid">

    <button onClick={() => window.location.href="/admin/pujas"}>
      📿 Manage Pujas
    </button>

    <button onClick={() => window.location.href="/admin/pujas/add"}>
      ➕ Add New Puja
    </button>

    <button onClick={() => window.location.href="/admin/bookings"}>
      📅 Bookings
    </button>

    <button onClick={() => window.location.href="/admin/settings"}>
      ⚙️ Settings
    </button>

  </div>

</div>
    </div>
  );
}