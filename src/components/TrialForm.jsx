import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrialForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        needs: 'saas',
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('POST /api/public/trials', formData);

            if (Math.random() > 0.1) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', phone: '', needs: 'saas' });
            } else {
                throw new Error('Network error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="trial" className="py-24 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass rounded-3xl shadow-2xl overflow-hidden border border-white/40">
                    <div className="px-6 py-12 sm:p-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                                {t('trial.title')} <span className="text-gradient">{t('trial.titleHighlight')}</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t('trial.description')}
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="rounded-2xl bg-green-50/80 backdrop-blur-sm p-8 text-center animate-fade-in-up border border-green-100">
                                <div className="flex justify-center mb-6">
                                    <div className="rounded-full bg-green-100 p-3">
                                        <CheckCircle className="h-12 w-12 text-green-500" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-green-800 mb-2">{t('trial.successTitle')}</h3>
                                <p className="text-green-700 mb-8">
                                    {t('trial.successDesc')}
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-sm font-semibold text-green-700 hover:text-green-800 underline decoration-2 underline-offset-2"
                                >
                                    {t('trial.registerAnother')}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {status === 'error' && (
                                    <div className="rounded-xl bg-red-50 p-4 border border-red-100 animate-shake">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-red-800">
                                                    {t('trial.errorTitle')}
                                                </h3>
                                                <div className="mt-2 text-sm text-red-700">
                                                    <p>{t('trial.errorDesc')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2">
                                    <div className="group">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                            {t('trial.fullName')}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 shadow-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                            {t('trial.company')}
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 shadow-sm"
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div className="sm:col-span-2 group">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                            {t('trial.workEmail')}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 shadow-sm"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                            {t('trial.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 shadow-sm"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="needs" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                            {t('trial.deploymentNeed')}
                                        </label>
                                        <select
                                            id="needs"
                                            name="needs"
                                            value={formData.needs}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-3 rounded-xl border-gray-200 bg-white/50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 transition-all duration-200 shadow-sm"
                                        >
                                            <option value="saas">{t('trial.saasOption')}</option>
                                            <option value="on-prem">{t('trial.onPremOption')}</option>
                                            <option value="hybrid">{t('trial.hybridOption')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-red-600 hover:from-primary-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                                {t('trial.processing')}
                                            </>
                                        ) : (
                                            t('trial.submit')
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrialForm;
