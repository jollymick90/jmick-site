import { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

import { Resume } from '../../resume/resume';



export const ResumePage = () => {
    const componentRef = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return <div className="">
        <button onClick={handlePrint}>Print this out!</button>
        <div ref={componentRef}>

            <Resume />
        </div>
    </div>
}