import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DiseaseProducts from "../pages/DiseaseProducts";
// import Medicines from "../pages/Medicines";
import Blog1 from "../pages/Blog"
import Articles from "../pages/ArticlesSection";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diseaseproducts" element={<DiseaseProducts />} />
      {/* <Route path="/medicines" element={<Medicines />} /> */}
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/articles" element={<Articles />} />

    </Routes>
  );
}

export default AppRoutes;