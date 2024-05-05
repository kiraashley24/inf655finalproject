import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Category from "../../components/category/Category.jsx";
import HomePageProductCard from '../../components/homePageProducts/HomePageProducts.jsx';
import Review from '../../components/reviews/Reviews.jsx';

const Home = () => {
  return (
    <>
    <Layout>
      <HeroSection />
      <Category />
      < HomePageProductCard/>
      < Review/>
    </Layout>
    </>
  );
};

export default Home;
