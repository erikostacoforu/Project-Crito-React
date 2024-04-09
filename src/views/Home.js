import React from 'react'
import Header from '../components/Header'
import ShowcaseSection from '../components/ShowcaseSection';
import Brands from '../components/Brands';
import Features from '../components/Features';
import AboutCompany from '../components/AboutCompany';
import OurService from '../components/OurService';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectCaseStudies from '../components/ProjectCaseStudies';
import MeetOurTeam from '../components/MeetOurTeam';
import Testimonial from '../components/Testimonial';
import ArticleNews from '../components/ArticleNews';
import NewsUpdate from '../components/NewsUpdate';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
          <main>
            <ShowcaseSection />
            <Brands />
            <Features />
            <AboutCompany />
            <OurService />
            <WhyChooseUs />
            <ProjectCaseStudies />
            <MeetOurTeam />
            <Testimonial />
            <ArticleNews />
            <NewsUpdate />
          </main>
            <Footer />
    </>
  )
}

export default Home