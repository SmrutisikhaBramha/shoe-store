import React, { useState } from 'react';
import Breadcrumb from '../components/AllProductsPage/Breadcrumb';
import SidebarFilter from '../components/AllProductsPage/SidebarFilter';
import SortDropdown from '../components/AllProductsPage/SortDropdown';
import ProductLists from '../components/KidsProduct/ProductLists'; 
import allProducts from '../data/productsData';
import './kidshoes.css';

const KidsShoesPage = () => {
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState([60, 130]);

const kidsProducts = allProducts
  .filter(product => product.label === 'Kids')
  .filter(product => {
    const price = parseFloat(product.price.replace('$', ''));
    return price >= priceRange[0] && price <= priceRange[1];
  });

const sortedProducts = [...kidsProducts].sort((a, b) => {
  if (sortOption === 'newest') return b.id - a.id;
  if (sortOption === 'low-to-high') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
  if (sortOption === 'high-to-low') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
  if (sortOption === 'a-z') return a.name.localeCompare(b.name);
  if (sortOption === 'z-a') return b.name.localeCompare(a.name);
  return 0;
});


  return (
    <div className="kids-shoes-container">
      <Breadcrumb current="Kids shoes" />
      <h1 className="page-title">Kids shoes</h1>

      <div className="products-layout">
        <div className="sidebar">
          <SidebarFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>

        <div className="products-section">
          <div className="products-header">
            <span>{sortedProducts.length} products</span>
            <SortDropdown setSortOption={setSortOption} />
          </div>

          <ProductLists products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default KidsShoesPage;
