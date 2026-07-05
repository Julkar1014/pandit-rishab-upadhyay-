import { Menu } from "lucide-react";

export default function Navbar({ openSidebar }) {

  const admin = JSON.parse(localStorage.getItem("admin"));
  const firstName = admin?.name?.split(" ")[0] || "Admin";

  return (
    <header className="admin-navbar">

      <button
        className="menu-btn"
        onClick={openSidebar}
      >
        <Menu size={24} />
      </button>

      <h2>Admin Dashboard</h2>

      <div className="admin-user">
        👤 {firstName}
      </div>

    </header>
  );
}