
import React, { useState } from 'react';
import Breadcrumb from '../components/AllProductsPage/Breadcrumb';
import SidebarFilter from '../components/AllProductsPage/SidebarFilter';
import SortDropdown from '../components/AllProductsPage/SortDropdown';
import BestSellerProductLists from '../components/BestSellerProducts/BestSellerProductLists';
import allProducts from '../data/products';
import './bestsellers.css';

const BestSellersPage = () => {
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState([60, 130]);

    const bestSellers = allProducts
        .filter(product => product.isBestSeller)
        .filter(product => {
            const price = parseFloat(product.price.toString().replace('$', ''));
            return price >= priceRange[0] && price <= priceRange[1];
        });

    const sortedProducts = [...bestSellers].sort((a, b) => {
        if (sortOption === 'newest') return b.id - a.id;
        if (sortOption === 'low-to-high') return parseFloat(a.price) - parseFloat(b.price);
        if (sortOption === 'high-to-low') return parseFloat(b.price) - parseFloat(a.price);
        if (sortOption === 'a-z') return a.name.localeCompare(b.name);
        if (sortOption === 'z-a') return b.name.localeCompare(a.name);
        return 0;
    });

    return (
        <div className="bestsellers-container">
            <Breadcrumb current="Best Sellers" />
            <h1 className="bestsellers-title">Best Sellers</h1>
            <p className="bestsellers-description">In this category, add your best-selling products.</p>

            <div className="bestsellers-layout">
                <div className="bestsellers-sidebar">
                    <SidebarFilter priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>

                <div className="bestsellers-products">
                    <div className="bestsellers-header">
                        <span className="product-count">{sortedProducts.length} products</span>
                        <div className="sort-wrapper">
                            
                            <SortDropdown setSortOption={setSortOption} />
                        </div>
                    </div>

                    <BestSellerProductLists products={sortedProducts} />

                </div>
            </div>
        </div>
    );
};

export default BestSellersPage;
