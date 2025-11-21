import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const location = useLocation();

    const navLinks = [
        { name: t('nav.features'), href: '/features' },
        { name: t('nav.pricing'), href: '/pricing' },
        { name: t('nav.roadmap'), href: '/#roadmap' }, // Anchor link for homepage section
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive(link.href) ? 'text-primary-600' : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow transition-all"
                        >
                            {t('nav.login')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-up">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.href)
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 px-5 py-3 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-700"
                        >
                            {t('nav.login')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
