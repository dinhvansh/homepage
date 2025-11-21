import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Roadmap = () => {
    const { t } = useLanguage();

    const phases = [
        { id: 1, title: 'roadmap.phase1Title', description: 'roadmap.phase1Desc', status: 'completed' },
        { id: 2, title: 'roadmap.phase2Title', description: 'roadmap.phase2Desc', status: 'current' },
        { id: 3, title: 'roadmap.phase3Title', description: 'roadmap.phase3Desc', status: 'upcoming' },
        { id: 4, title: 'roadmap.phase4Title', description: 'roadmap.phase4Desc', status: 'upcoming' },
        { id: 5, title: 'roadmap.phase5Title', description: 'roadmap.phase5Desc', status: 'upcoming' },
    ];

    const getStatusLabel = (status) => {
        switch (status) {
            case 'completed': return t('roadmap.statusCompleted');
            case 'current': return t('roadmap.statusCurrent');
            case 'upcoming': return t('roadmap.statusUpcoming');
            default: return status;
        }
    };

    return (
        <section id="roadmap" className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-orange-50/30 to-white pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">{t('roadmap.title')}</h2>
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        {t('roadmap.heading')} <span className="text-gradient">{t('roadmap.headingHighlight')}</span>
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-red-200 to-gray-100 hidden md:block rounded-full"></div>

                    <div className="space-y-16">
                        {phases.map((phase, index) => (
                            <div key={phase.id} className={`relative flex items-center justify-between md:justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Dot with glow effect */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center z-10 ${phase.status === 'completed' ? 'bg-green-500 shadow-green-200' :
                                    phase.status === 'current' ? 'bg-primary-500 shadow-primary-200 animate-pulse' :
                                        'bg-gray-300'
                                    }`}>
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                                    <div className="glass-card p-8 rounded-2xl border-t-4 border-t-primary-500/0 hover:border-t-primary-500 transition-all duration-300 group">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 ${phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            phase.status === 'current' ? 'bg-primary-100 text-primary-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {getStatusLabel(phase.status)}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{t(phase.title)}</h3>
                                        <p className="mt-3 text-gray-500 text-lg">{t(phase.description)}</p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
