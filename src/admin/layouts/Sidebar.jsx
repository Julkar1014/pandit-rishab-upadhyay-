import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Star,
  Settings,
  LogOut,
  X,
} from "lucide-react";

export default function Sidebar({ open, closeSidebar }) {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Pujas",
      path: "/admin/pujas",
      icon: <BookOpen size={20} />,
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Reviews",
      path: "/admin/reviews",
      icon: <Star size={20} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside
  className={`sidebar ${
    open ? "show" : ""
  }`}
>

        <div className="sidebar-top">

          <h2>Pandit Admin</h2>

          <button
            className="close-btn"
            onClick={closeSidebar}
          >
            <X size={22} />
          </button>

        </div>

        <div className="sidebar-links">

          {menus.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "active"
                  : ""
              }
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

        </div>

        <div className="sidebar-footer">

          <button>
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
}