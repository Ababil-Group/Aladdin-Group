import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ContactPage from "./pages/contacts/ContactPage";
import ScrollToTop from "./pages/components/ScrollToTop";
import Courses from "./pages/course/Courses";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <div className="relative">
        <FloatingWhatsApp className="absolute bottom-5 left-0" />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
