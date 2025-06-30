
import React, { useState } from 'react';
import Breadcrumb from '../components/AllProductsPage/Breadcrumb';
import SidebarFilter from '../components/AllProductsPage/SidebarFilter';
import SortDropdown from '../components/AllProductsPage/SortDropdown';
import ProductLists from '../components/AllProductsPage/ProductLists';
import LoadMoreButton from '../components/AllProductsPage/LoadMoreButton';
import productsData from '../data/productsData'; 

import './allproductspages.css'; 

const AllProductsPage = () => {
 
  const [priceRange, setPriceRange] = useState([64, 129]);
  const [sortOption, setSortOption] = useState('');
  const [Count, setCount] = useState(8);
  

 
  const filteredProducts = productsData.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'newest') return b.id - a.id;
    if (sortOption === 'low-to-high') return a.price - b.price;
    if (sortOption === 'high-to-low') return b.price - a.price;
    if (sortOption === 'a-z') return a.name.localeCompare(b.name);
    if (sortOption === 'z-a') return b.name.localeCompare(a.name);
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, Count);
  const loadMore = () => {
    setCount((prev) => prev + 4);
  };

return (
  <div className="all-products-container">
    <Breadcrumb current="All Products" />

   
    <h1 className="page-title">All Products</h1>

    <div className="products-layout">
      <div className="sidebar">              
        <SidebarFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>

      <div className="products-section">
      
        <div className="products-header">
          <SortDropdown setSortOption={setSortOption} />
        </div>

        <ProductLists products={visibleProducts} />

        {Count < sortedProducts.length && (
          <LoadMoreButton onClick={loadMore} />
        )}
      </div>
    </div>
  </div>
);

};

export default AllProductsPage;

