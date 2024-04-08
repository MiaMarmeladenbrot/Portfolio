import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Books from "./pages/Books";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <section className="p-4">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
