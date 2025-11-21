import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

const PricingPage = () => {
    const { t } = useLanguage();

    const plans = [
        {
            name: t('pricing.saas'),
            price: "$15",
            period: t('pricing.perUser'),
            description: t('pricing.descSaas'),
            features: [
                t('pricing.saasFeatures.unlimitedDocs'),
                t('pricing.saasFeatures.basicWorkflows'),
                t('pricing.saasFeatures.emailOtp'),
                t('pricing.saasFeatures.cloudStorage'),
                t('pricing.saasFeatures.standardSupport')
            ],
            highlight: false
        },
        {
            name: t('pricing.enterprise'),
            price: "$35",
            period: t('pricing.perUser'),
            description: t('pricing.descEnterprise'),
            features: [
                t('pricing.enterpriseFeatures.everythingSaas'),
                t('pricing.enterpriseFeatures.smsOtp'),
                t('pricing.enterpriseFeatures.advancedWorkflows'),
                t('pricing.enterpriseFeatures.apiAccess'),
                t('pricing.enterpriseFeatures.prioritySupport')
            ],
            highlight: true
        },
        {
            name: t('pricing.onprem'),
            price: "Contact",
            period: t('pricing.perServer'),
            description: t('pricing.descOnPrem'),
            features: [
                t('pricing.onPremFeatures.fullDataControl'),
                t('pricing.onPremFeatures.dockerDeployment'),
                t('pricing.onPremFeatures.adLdapIntegration'),
                t('pricing.onPremFeatures.customBranding'),
                t('pricing.onPremFeatures.dedicatedManager')
            ],
            highlight: false
        }
    ];

    return (
        <div className="pt-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        {t('pricing.heading')}
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        {t('pricing.headingDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 ${plan.highlight
                                ? 'bg-white border-2 border-primary-500 shadow-xl scale-105 z-10'
                                : 'bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                        {t('pricing.mostPopular')}
                                    </span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="mt-4 text-gray-500">{plan.description}</p>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="ml-1 text-xl text-gray-500">{plan.period}</span>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`mt-8 w-full py-3 px-4 rounded-xl font-bold transition-all ${plan.highlight
                                ? 'bg-gradient-to-r from-primary-600 to-red-600 text-white hover:shadow-lg hover:-translate-y-1'
                                : 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50'
                                }`}>
                                {plan.price === "Contact" ? t('pricing.contactSales') : t('pricing.startTrial')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
