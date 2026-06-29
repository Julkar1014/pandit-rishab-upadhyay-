import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import PanditJi from "./pages/PanditJi";
import Contact from "./pages/Contact";
import PujaDetails from "./pages/PujaDetails";
import BookPuja from "./pages/BookPuja";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pujas/:slug" element={<PujaDetails />} />
        <Route path="/book-puja/:slug" element={<BookPuja />} />
        <Route path="/about" element={<About />} />
        <Route path="/pandit-ji" element={<PanditJi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;