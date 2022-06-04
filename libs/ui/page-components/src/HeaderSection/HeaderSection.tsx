import { HeaderSupportLink } from '@jmick-site/model/page-component';
import { classNames } from '@jmick-site/vanilla-js';

import { FC } from "react";

export interface HeaderSectionProps {
    supportLinks: HeaderSupportLink[]
    backgroundImg: string;
    title: string;
    subtitle: string
    themeColor: string
}


export const HeaderSection: FC<HeaderSectionProps> = ({
    supportLinks, backgroundImg, title, subtitle, themeColor
}) => {

    const classNameLink = `absolute top-0 p-5 inline-block bg-${themeColor}-600 rounded-xl shadow-lg transform -translate-y-1/2`;
    const classNameContact = classNames('text-base font-medium', `text-${themeColor}-700`, `hover:text-${themeColor}-600`);
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="relative pb-32 bg-gray-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src={backgroundImg}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        {subtitle}

                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div
                                    // className={classNames('absolute top-0 p-5 inline-block',`bg-${themeColor}-600`, "rounded-xl shadow-lg transform -translate-y-1/2")}
                                    // className={`absolute top-0 p-5 inline-block bg-jm-600 rounded-xl shadow-lg transform -translate-y-1/2`}
                                    className={classNameLink}
                                >
                                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href={link.href}
                                    className={classNameContact}
                                >

                                    GO TO<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
