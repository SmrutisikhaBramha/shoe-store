import React, { useState } from 'react';
import Breadcrumb from '../components/AllProductsPage/Breadcrumb';
import SidebarFilter from '../components/AllProductsPage/SidebarFilter';
import SortDropdown from '../components/AllProductsPage/SortDropdown';
import ArtisanalProductList from '../components/ArtisanalProducts/ArtisanalProductList';
import ArtisanalProducts from '../data/Artisanal';
import './artisanal.css'; 

const ArtisanalPage = () => {
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState([60, 200]);

    const filteredProducts = ArtisanalProducts.filter(product => {
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
        <div className="artisanal-container">
            <Breadcrumb current="Artisanal" />
            <h1 className="artisanal-title">Artisanal</h1>
            <p className="artisanal-description">Discover our handpicked Artisanal range — crafted with quality and character.</p>

            <div className="artisanal-layout">
                <div className="artisanal-sidebar">
                    <SidebarFilter priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>

                <div className="artisanal-products">
                    <div className="artisanal-header">
                        <span className="product-count">{sortedProducts.length} products</span>
                        <div className="sort-wrapper">
                            <SortDropdown setSortOption={setSortOption} />
                        </div>
                    </div>

                    <ArtisanalProductList products={sortedProducts} />
                </div>
            </div>
        </div>
    );
};

export default ArtisanalPage;

