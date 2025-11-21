import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturesPage = () => {
    const { t } = useLanguage();

    const featuresList = [
        {
            title: "Dashboard Overview",
            description: "Get a complete view of your document status, pending actions, and recent activities in one intuitive dashboard.",
            image: "/images/dashboard.png"
        },
        {
            title: "Seamless Signing",
            description: "Sign documents quickly with our secure, legally binding electronic signature workflow.",
            image: "/images/signing.png"
        },
        {
            title: "Document Management",
            description: "Organize, search, and manage all your contracts and agreements in a centralized, secure repository.",
            image: "/images/docs.png"
        }
    ];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        {t('features.heading')} <span className="text-gradient">{t('features.headingHighlight')}</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        {t('features.subheading')}
                    </p>
                </div>

                <div className="space-y-24">
                    {featuresList.map((feature, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <div className="glass-card p-2 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="rounded-xl w-full h-auto object-cover border border-gray-100"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3">
                                    {['Secure & Compliant', 'Real-time Updates', 'Mobile Ready'].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
