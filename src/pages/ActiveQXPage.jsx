import React, { useState } from 'react';
import Breadcrumb from '../components/AllProductsPage/Breadcrumb';
import SidebarFilter from '../components/AllProductsPage/SidebarFilter';
import SortDropdown from '../components/AllProductsPage/SortDropdown';
import ActiveQXProductList from '../components/ActiveQxProducts/ActiveQXProductList';
import activeQXProducts from '../data/ActiveQX';
import './activeqx.css'; 

const ActiveQXPage = () => {
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState([60, 130]);

    const filteredProducts = activeQXProducts.filter(product => {
        const price = parseFloat(product.price);
        return price >= priceRange[0] && price <= priceRange[1];
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'newest') return b.id - a.id;
        if (sortOption === 'low-to-high') return parseFloat(a.price) - parseFloat(b.price);
        if (sortOption === 'high-to-low') return parseFloat(b.price) - parseFloat(a.price);
        if (sortOption === 'a-z') return a.name.localeCompare(b.name);
        if (sortOption === 'z-a') return b.name.localeCompare(a.name);
        return 0;
    });

    return (
        <div className="activeqx-container">
            <Breadcrumb current="Active QX" />
            <h1 className="activeqx-title">Active QX</h1>
            <p className="activeqx-description">Explore the Bio series — built for performance, comfort, and versatility.</p>

            <div className="activeqx-layout">
                <div className="activeqx-sidebar">
                    <SidebarFilter priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>

                <div className="activeqx-products">
                    <div className="activeqx-header">
                        <span className="product-count">{sortedProducts.length} products</span>
                        <div className="sort-wrapper">
                            <SortDropdown setSortOption={setSortOption} />
                        </div>
                    </div>

                    <ActiveQXProductList products={sortedProducts} />
                </div>
            </div>
        </div>
    );
};

export default ActiveQXPage;
