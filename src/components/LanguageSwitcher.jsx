import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition-colors"
        >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'EN' : 'VN'}</span>
        </button>
    );
};

export default LanguageSwitcher;
