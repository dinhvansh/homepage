import React, { createContext, useState, useContext } from 'react';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const LanguageContext = createContext();

const translations = { en, vi };

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('vi'); // Default to Vietnamese as requested implies local context

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
