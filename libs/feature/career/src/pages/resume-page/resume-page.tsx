import { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

import { Resume } from '../../resume/resume';
import { DocumentDownloadIcon } from '@heroicons/react/outline'

 
export const ResumePage = () => {
    const componentRef = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const DButton = (<button
        onClick={handlePrint}
        type="button"
        className="absolute right-0 z-10 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-jm-600 hover:bg-jm-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jm-500 hover:ring-2 hover:ring-jm-500"
    >
        <DocumentDownloadIcon className="h-5 w-5" aria-hidden="true" />
    </button>)

    return <div className="relative bg-gray-100">

        <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/3">
                <img
                    className="h-56 w-full object-cover lg:absolute lg:h-full"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    alt=""
                />
            </div>
        </div>
        <div className="relative pt-4 pb-16 px-4 sm:pt-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-4">
            <div className="relative lg:col-start-2 lg:col-span-3 lg:pl-8 drop-shadow-md rounded-md p-2">
                {DButton}
                <div ref={componentRef} >
                    <Resume />
                </div>
            </div>
        </div>

    </div>
}