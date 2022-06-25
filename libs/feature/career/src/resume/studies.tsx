import { classNames } from "@jmick-site/vanilla-js";
import { FC } from "react";

import {
    AcademicCapIcon,
} from '@heroicons/react/solid'
export const eventTypes = {
    study: { icon: AcademicCapIcon, bgColorClass: 'bg-red-400' },
}
export const timeline = [
    {
        id: 1,
        type: eventTypes.study,
        content: 'Università studi Padova',
        target: 'Triennale Ingegneria Dell\'informazione',
        date: '2015',
    },
    {
        id: 2,
        type: eventTypes.study,
        content: 'ITIS C.Zuccante',
        target: 'Perito Tecnico Elettronico e telecomunicazioni',
        date: '2009',
    }
]


export const Studies = () => {
    return <div className="bg-white px-4 py-2 sm:rounded-lg sm:px-1">
        <h2 id="timeline-title" className="my-1 mx-1 text-lg font-medium text-gray-900">
            Esperienze Lavorative
        </h2>

        {/* Activity Feed */}
        <div className="mt-3 flow-root">

            {timeline.map((item, itemIdx) => (
                <div key={item.id}>
                    <div className="relative pb-2">
                        {itemIdx !== timeline.length - 1 ? (
                            <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                            />
                        ) : null}
                        <div className="relative flex space-x-3">
                            <div>
                                <span
                                    className={classNames(
                                        item.type.bgColorClass,
                                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                    )}
                                >
                                    <item.type.icon className="w-5 h-5 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <div className="text-sm text-gray-500">
                                        <span>{item.content}{' '}</span>
                                        <span className="font-medium text-gray-900">
                                            {item.target}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <span >{item.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}