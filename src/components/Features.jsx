import React from 'react';
import { UploadCloud, PenTool, ShieldCheck, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const features = [
    {
        name: 'features.securePdfUpload',
        description: 'features.securePdfUploadDesc',
        icon: UploadCloud,
    },
    {
        name: 'features.workflowOtp',
        description: 'features.workflowOtpDesc',
        icon: PenTool,
    },
    {
        name: 'features.auditTrail',
        description: 'features.auditTrailDesc',
        icon: ShieldCheck,
    },
    {
        name: 'features.onPremLicense',
        description: 'features.onPremLicenseDesc',
        icon: Server,
    },
];

const Features = () => {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">{t('features.title')}</h2>
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        {t('features.heading')} <span className="text-gradient">{t('features.headingHighlight')}</span>
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        {t('features.subheading')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={feature.name} className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300">
                            <div>
                                <span className="rounded-xl inline-flex p-4 bg-gradient-to-br from-primary-50 to-white text-primary-600 ring-1 ring-primary-100 group-hover:from-primary-600 group-hover:to-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                                    <a href="#" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {t(feature.name)}
                                    </a>
                                </h3>
                                <p className="mt-4 text-base text-gray-500 leading-relaxed">
                                    {t(feature.description)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
