import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-red-400">
                            E-Sign Pro
                        </span>
                        <p className="mt-6 text-gray-400 max-w-sm text-lg leading-relaxed">
                            {t('footer.desc')}
                        </p>
                        <div className="flex space-x-6 mt-8">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-6">{t('footer.product')}</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.features')}</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.pricing')}</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.roadmap')}</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.apiDocs')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-6">{t('footer.support')}</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.helpCenter')}</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.status')}</a></li>
                            <li><a href="#" className="text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('footer.contactSales')}</a></li>
                            <li className="flex items-center text-gray-300 pt-2">
                                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                                support@esignpro.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-500">
                        &copy; 2025 E-Sign Pro Inc. {t('footer.rightsReserved')}
                    </p>
                    <p className="text-base text-gray-600 flex items-center mt-4 md:mt-0">
                        {t('footer.madeWith')} <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> {t('footer.inVietnam')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
