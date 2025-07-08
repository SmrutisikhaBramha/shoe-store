import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Productlist from './components/Productlist/Productlist';
import Footer from './components/Footer/Footer';
import BannerMarquee from './components/BannerMarquee/BannerMarquee';
import CollectionSection from './components/CollectionSection/CollectionSection';
import PromoBanner from './components/PromoBanner/PromoBanner';
import LandingSection from './components/LandingSection/LandingSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import AllProductsPage from './pages/allproductspages'; 
import ProductDetail from './pages/ProductDetail';
import CartPage from './components/Cart/CartPage';
import KidsShoesPage from './pages/KidsShoesPage';
import BestSellersPage from './pages/BestSellersPage';
import BestSellerProductDetail from './pages/BestSellerProductDetail';
import ActiveQXPage from './pages/ActiveQXPage';
import ActiveQXProductDetail from './pages/ActiveQXProductDetail';
import ArtisanalPage from './pages/ArtisanalPage';
import ArtisanalProductDetail from './pages/ArtisanalProductDetail';
import AboutSection from './pages/AboutSection';

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Productlist />
              <PromoBanner />
              <BannerMarquee />
              <CollectionSection />
              <LandingSection />
            <TestimonialSection/>
            </>
          }
        />
        <Route path="/products" element={<Productlist />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/best-sellers/product/:id" element={<BestSellerProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/kids" element={<KidsShoesPage />} />
        <Route path="/kids" element={<KidsShoesPage />} />
        <Route path="/active-qx" element={<ActiveQXPage />} />
        <Route path="/active-qx/product/:id" element={<ActiveQXProductDetail />} />
        <Route path="/artisanal" element={<ArtisanalPage />} />
        <Route path="/artisanal/product/:id" element={<ArtisanalProductDetail />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
