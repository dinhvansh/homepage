import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from '../components/Logo';

const LoginPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Logo className="text-3xl" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {t('login.title')}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 glass-card">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                {t('login.email')}
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                {t('login.password')}
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    {t('login.rememberMe')}
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                                    {t('login.forgot')}
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-red-600 hover:from-primary-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                                {t('login.submit')}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    {t('login.or')}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="sr-only">Sign in with Google</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                    </svg>
                                    <span className="ml-2">{t('login.google')}</span>
                                </a>
                            </div>

                            <div>
                                <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="sr-only">Sign in with Microsoft</span>
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 21 21">
                                        <path fill="#f25022" d="M1 1h9v9H1z" />
                                        <path fill="#00a4ef" d="M1 11h9v9H1z" />
                                        <path fill="#7fba00" d="M11 1h9v9H11z" />
                                        <path fill="#ffb900" d="M11 11h9v9H11z" />
                                    </svg>
                                    <span className="ml-2">{t('login.microsoft')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
