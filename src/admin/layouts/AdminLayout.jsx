import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/admin.css";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar
        open={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        <Navbar
          openSidebar={() => setSidebarOpen(true)}
        />

        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}