import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import PujaDetails from "./pages/PujaDetails";
import BookPuja from "./pages/BookPuja";
import ScrollToTop from "./components/ScrollToTop";

// Admin
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AdminLayout from "./admin/layouts/AdminLayout";
import Pujas from "./admin/pages/Pujas";
import AddPuja from "./admin/pages/AddPuja";
import Bookings from "./admin/pages/Bookings";
import AdminReviews from "./admin/pages/Reviews";
import Settings from "./admin/pages/Settings";
import { Scroll } from "lucide-react";

function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        {/* Website Routes */}

        <Route element={<WebsiteLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/pujas/:id" element={<PujaDetails />} />

          <Route path="/book-puja/:id" element={<BookPuja />} />

          <Route path="/about" element={<About />} />

          <Route path="/reviews" element={<Reviews />} />

          <Route path="/contact" element={<Contact />} />
          </Route>

                  {/* Admin Login */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
  path="/test"
  element={<h1 style={{color:"red"}}>TEST ROUTE WORKING</h1>}
/>

        {/* Dashboard */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Pujas */}

        <Route
          path="/admin/pujas"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Pujas />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/pujas/add"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AddPuja />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/pujas/edit/:id"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AddPuja />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
                {/* Bookings */}

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Bookings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Reviews */}

        <Route
          path="/admin/reviews"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminReviews />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Settings */}

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Settings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}