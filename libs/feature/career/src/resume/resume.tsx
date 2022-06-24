import { FC } from "react"


export const Resume: FC<any> = () => {
    return <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="block text-base text-center text-jm-600 font-semibold tracking-wide uppercase">
                        Michele Scarpa
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Software engineer
                    </span>
                </h1>
                <p className="text-center mt-8 text-xl text-gray-500 leading-8">
                Javascript - Typescript - React - Vue - Angular - Android - Java - Dotnet.
                </p>
                <p className="text-center flex flex-col gap-1 justify-center mt-8 text-lg text-gray-500 leading-8">
                    <span>
                        scarpa.michele.90@gmail.com
                    </span>
                    <span>
                        3483482541
                    </span>
                </p>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                    Dal 2015 sviluppo software, so essere versatile e in questi anni ho imparato a trovare soluzioni adatte al contesto e al cliente.<br/>Sono appassionato del settore IT e ricerco costantemente di migliorare le mie qualità tecniche e professionali, un ottimo jolly focalizzato su risultato e qualità
                </p>
                
                <h4>Abilità tecniche</h4>
                <p>
                    Avanzate	Javascript, Typescript, HTML/CSS, Ract, AngularJS, AngularTS, VueJS, Android, Tizen OS,  JQuery, openlayers, git

                    Intermedie	Java, Kotlin, Framework7, Angular, SQL, Agile-Scrum-Kanban

                    Base	NodeJS, Dotnet, Cordova

                </p>
                <h4>Caratteristiche Personali </h4>
                <p>

                    Responsabilità	Problem Solving	Mentalità aperta	Creatività	Teamwork

                </p>
                <h4>Settori</h4>
                <p>
                    Digital Signage – Content Management System (CMS).
                    Mobile Nativo e Cross platform - B2B e B2C.
                    Portali Mappe Web

                </p>
                <h4>certificazioni</h4>
                <p>
                    Certificazioni/corsi formazione

                    Google Professional Data Engineering 2020
                    Metodo Agile 2021
                    ISIPM 2022

                </p>

                <h4>Esperienze lavorative</h4>
                <p>

                    Viasat - Greenext	2021 - attuale
                    Red-V Ennova Research -	2015  2021
                    IN's Mercato	2012 - 2014

                </p>
                <h4>Istruzione</h4>
                <p>
                    Ingegneria dell’informazione Triennale - Università degli Studi di Padova 		2009 – 2015
                    ITIS C. Zuccante 							                                2004 – 2009

                </p>

            </div>
        </div>

    </div>
}