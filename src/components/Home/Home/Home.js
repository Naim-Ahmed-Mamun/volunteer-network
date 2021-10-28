import React from 'react';
import Header from '../../shared/Header/Header';
import Events from '../Events/Events';
import HeroBanner from '../HeroBanner/HeroBanner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroBanner></HeroBanner>
            <Events></Events>
        </>
    );
};

export default Home;