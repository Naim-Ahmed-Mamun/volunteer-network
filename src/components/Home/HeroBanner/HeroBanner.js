import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <>
            <div className="hero_banner">
                <div className="banner_text">
                    <h2>I grow by helping people in need.</h2>
                    <div className="search_field text-center">
                        <input type="search" placeholder="Search...." />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;