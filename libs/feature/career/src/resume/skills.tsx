import { classNames } from "@jmick-site/vanilla-js";

type LevelTag = "high" | "medium" | "base"
interface SkillItem {
    name: string;
    level: number;
    levelTag: LevelTag
}
const listSkills: SkillItem[] = [
    //advanced
    {
        name: "Typescript",
        level: 90,
        levelTag: "high"

    },
    {
        name: "Javascript",
        level: 90,
        levelTag: "high"
    },
    {
        name: "HTML/CSS",
        level: 85,
        levelTag: "high"
    },
    {
        name: "React",
        level: 85,
        levelTag: "high"
    },
    {
        name: "Angular",
        level: 85,
        levelTag: "high"
    },
    {
        name: "Vue",
        level: 85,
        levelTag: "high"
    },
    {
        name: "JQuery",
        level: 85,
        levelTag: "high"
    },
    {
        name: "OpenLayers",
        level: 70,
        levelTag: "high"
    },
    {
        name: "git",
        level: 70,
        levelTag: "high"
    },
    //intermedie

    {
        name: "Java",
        level: 60,
        levelTag: "medium"
    },
    {
        name: "Kotlin",
        level: 60,
        levelTag: "medium"
    },
    {
        name: "Android",
        level: 65,
        levelTag: "medium"
    },
    {
        name: "Tizen OS",
        level: 65,
        levelTag: "medium"
    },
    {
        name: "Framework7",
        level: 60,
        levelTag: "medium"
    },
    //
    {
        name: "SQL",
        level: 50,
        levelTag: "base"
    },

    {
        name: "C#",
        level: 50,
        levelTag: "base"
    },
    {
        name: "DotNet",
        level: 50,
        levelTag: "base"
    },
    {
        name: "NodeJS",
        level: 50,
        levelTag: "base"
    },
    {
        name: "Cordova",
        level: 40,
        levelTag: "base"
    },

]


export const Skills = () => {

    const getColor = (skill: SkillItem) => {
        switch (skill.levelTag) {
            case "high":

                return "bg-green-500"

            case "medium":

                return "bg-yellow-500"
            case "base":

                return "bg-pink-500"
        }
    }
    return <div>
        <h4>Abilità tecniche</h4>
        <div className="w-full grid grid-cols-6 gap-2">
            {listSkills.map(skill =>
                <div className="m-1 w-full flex flex-col">
                    <label className="text-sm truncate text-ellipsis">{skill.name}</label>
                    <div className="w-full bg-gray-200 h-1">
                        <div className={classNames(getColor(skill), "h-1")} style={{ width: `${skill.level}%` }}></div>
                    </div>
                </div>
            )}
        </div>

    </div >

}