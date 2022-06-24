import { FC } from "react"
import { Contact } from "./contact"
import { MainSkills } from "./main-skills"
import { Presentation } from "./presentation"
import { Skills } from "./skills"


export const Resume: FC<any> = () => {
    return <div className="relative py-1 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
                <h1 >
                    <span className="block text-base text-center text-jm-600 font-semibold tracking-wide uppercase">
                        Michele Scarpa
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Software engineer
                    </span>
                </h1>
                <MainSkills />
                <Contact />
            </div>
            <div className="mt-3 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <Presentation />

                <Skills />
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