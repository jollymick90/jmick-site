import { Certificate } from "crypto"
import { FC } from "react"
import { Certifications } from "./certifications"
import { Contact } from "./contact"
import { Experiences } from "./experiences"
import { MainSkills } from "./main-skills"
import { Presentation } from "./presentation"
import { Skills } from "./skills"
import { Studies } from "./studies"


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
                <Experiences />
                <Certifications />
                <Studies />
            </div>
        </div>

    </div>
}