import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";

// Home Pages
import Home from "./pages/Home.jsx";
import DiseaseProducts from "./pages/DiseaseProducts.jsx";
import Blog1 from "./pages/Blog.jsx";
import Articles from "./pages/ArticlesSection.jsx";

// Medicines Website Pages
import MedicinesPage from "./pages/MedicinesPage.jsx";
import LicensePage from "./pages/LicensePage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Default Home Page */}
          <Route index element={<Home />} />

          {/* Home Website Routes */}
          <Route path="diseaseproducts" element={<DiseaseProducts />} />
          <Route path="blog1" element={<Blog1 />} />
          <Route path="articles" element={<Articles />} />

          {/* Medicines Website Routes */}
          <Route path="medicines" element={<MedicinesPage />} />
          <Route path="license" element={<LicensePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}