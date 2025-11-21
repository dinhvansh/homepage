import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import TrialForm from '../components/TrialForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <div id="roadmap">
                <Roadmap />
            </div>
            <div id="trial">
                <TrialForm />
            </div>
            <FAQ />
            <Footer />
        </>
    );
};

export default HomePage;
