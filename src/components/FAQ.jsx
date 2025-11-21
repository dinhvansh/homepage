import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();

    const faqs = [
        {
            question: "faq.q1",
            answer: "faq.a1"
        },
        {
            question: "faq.q2",
            answer: "faq.a2"
        },
        {
            question: "faq.q3",
            answer: "faq.a3"
        },
        {
            question: "faq.q4",
            answer: "faq.a4"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {t('faq.title')}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <dl className="space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="pt-6">
                                <dt className="text-lg">
                                    <h3 className="font-medium text-gray-900">
                                        {t(faq.question)}
                                    </h3>
                                </dt>
                                <dd className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">
                                        {t(faq.answer)}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
