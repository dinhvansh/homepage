import React from 'react';
import { ArrowRight, FileText, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToTrial = () => {
    const element = document.getElementById('trial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-red-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-primary-100 text-primary-700 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
            {t('hero.badge')}
          </div>
        </div>

        <h1 className="animate-fade-in-up [animation-delay:200ms] text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
          {t('hero.title')} <br />
          <span className="text-gradient">
            {t('hero.titleHighlight')}
          </span>
        </h1>

        <p className="animate-fade-in-up [animation-delay:400ms] mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row justify-center gap-6">
          <button onClick={scrollToTrial} className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-red-600 hover:from-primary-700 hover:to-red-700 shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1">
            {t('hero.ctaPrimary')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={scrollToRoadmap} className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
            {t('hero.ctaSecondary')}
            <FileText className="ml-2 h-5 w-5 group-hover:text-primary-600 transition-colors" />
          </button>
        </div>

        <div className="animate-fade-in-up [animation-delay:800ms] mt-16 flex justify-center gap-8 text-gray-400 grayscale opacity-70">
          <div className="flex items-center gap-2"><Shield className="h-5 w-5" /> {t('hero.soc2')}</div>
          <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> {t('hero.gdpr')}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
