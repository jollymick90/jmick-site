import { TsIcon, ReactIcon } from "@jmick-site/ui/page-components";
const showIcon = false;
const mainSkillList = [
    {
        name: "Typescript",
        icon: <TsIcon />
    },
    {
        name: "Javascript",
        icon: <TsIcon />
    },
    {
        name: "React",
        icon: <ReactIcon />
    },
    {
        name: "Angular",
        icon: <TsIcon />
    },
    {
        name: "Vue",
        icon: <TsIcon />
    },
    {
        name: "Android",
        icon: <TsIcon />
    }
]

export const MainSkills = () => {
    return <div className="w-full mt-8 text-xl text-gray-500 leading-8">
        <div className="flex flex-row flex-wrap gap-2 justify-center">
            {mainSkillList.map(skill =>
                <span className="inline-flex">
                    <span>{skill.name} </span>
                    {showIcon && <span>{skill.icon}</span>}
                </span>
            )
            }
        </div>
    </div>
}