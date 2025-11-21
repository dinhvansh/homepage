import React from 'react';

const Logo = ({ className = "h-8 w-auto" }) => {
    return (
        <div className="flex items-center gap-2">
            {/* Using the uploaded image as logo, assuming it's placed in public or imported */}
            {/* Since we don't have the image URL yet, I'll use a placeholder SVG that looks like the "Fire" theme */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-red-600 shadow-lg shadow-primary-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            </div>
            <span className={`font-bold text-xl tracking-tight ${className}`}>
                <span className="text-gray-900">E-Sign</span>
                <span className="text-primary-600">Pro</span>
            </span>
        </div>
    );
};

export default Logo;
