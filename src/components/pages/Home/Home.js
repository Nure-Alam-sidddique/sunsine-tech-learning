import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Footer></Footer>
        </>
    );
};

export default Home;