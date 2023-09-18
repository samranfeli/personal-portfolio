import Image from "next/image";

import antd from '../assets/skills/antd.svg';
import css from '../assets/skills/css3.svg';
import git from '../assets/skills/git.svg';
import html from '../assets/skills/html5.svg';
import js from '../assets/skills/js.svg';
import next from '../assets/skills/next.svg';
import react from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import sass from '../assets/skills/sass.svg';
import tailwind from '../assets/skills/tailwind.svg';
import ts from '../assets/skills/ts.svg';

const Skills = () => {

    const skills = [
        {
            title: "React",
            icon: react
        }, {
            title: "Redux",
            icon: redux
        },
        {
            title: "Html",
            icon: html
        }, {
            title: "Css",
            icon: css
        }, {
            title: "Js",
            icon: js
        }, {
            title: "Ts",
            icon: ts
        }, {
            title: "Nextjs",
            icon: next
        }, {
            title: "Git",
            icon: git
        }, {
            title: "Sass",
            icon: sass
        }, {
            title: "Tailwind",
            icon: tailwind
        }, {
            title: "Ant design",
            icon: antd
        }
    ]

    return (
        <section className="py-10 md:pt-10 md:pb-16 bg-gradient-to-r from-sky-50 to-rose-100 dark:from-sky-50/25 dark:to-rose-100/25">
            <div className="max-w-7xl mx-auto px-3">
                <h3 className="font-semibold text-xl md:text-3xl text-rose-600 text-center mb-6 md:mb-10">
                    Skills
                </h3>

                <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center">
                    {skills.map(skill => <Image key={skill.title} src={skill.icon} title={skill.title} alt={skill.title} className="w-10 md:w-16" />)}
                </div>
            </div>
        </section>
    )
}

export default Skills;