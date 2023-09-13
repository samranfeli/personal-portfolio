import Image from "next/image";

import charity from '../assets/projects/charity.jpg';
import enriskconsulting from '../assets/projects/enriskconsulting.jpg';
import ganjoor from '../assets/projects/ganjoor.jpg';
import goodwin from '../assets/projects/goodwin.jpg';
import samran from '../assets/projects/samran.jpg';
import sanazafshari from '../assets/projects/sanazafshari.jpg';
import sepidSabt from '../assets/projects/sepid-sabt.jpg';

const Projects = () => {

    const projects = [
        {
            title: "www.enriskconsulting.com",
            description: "Company Website (Wordpress website)",
            url: "https://enriskconsulting.com",
            repoUrl: null,
            cover: enriskconsulting,
            technologies: ["Html", "css", "jquery", "wordpress"]
        },
        {
            title: "Imam Reza Charity",
            description: "Company Website (Html theme)",
            url: "http://samran.ir/html/charity",
            repoUrl: null,
            cover: charity,
            technologies: ["Html", "css", "Foundation", "jquery"]
        },
        {
            title: "goodwin",
            description: "Company Website (Html theme)",
            url: "http://samran.ir/html/goodwin/",
            repoUrl: null,
            cover: goodwin,
            technologies: ["Html", "css", "Foundation", "jquery"]
        },
        {
            title: "www.samran.ir",
            description: "Artist personal website (Wordpress website)",
            url: "http://samran.ir",
            repoUrl: null,
            cover: samran,
            technologies: ["Html", "css", "jquery", "wordpress"]
        },
        {
            title: "www.sanazafshari.com",
            description: "Artist personal website (Wordpress website)",
            url: "http://sanazafshari.com/",
            repoUrl: null,
            cover: sanazafshari,
            technologies: ["Html", "css", "jquery", "wordpress"]
        },
        {
            title: "www.ganjoor.vercel.app",
            description: "Nextjs project using ganjoor API",
            url: "https://ganjoor.vercel.app/",
            repoUrl: "https://github.com/samranfeli/ganjoor",
            cover: ganjoor,
            technologies: ["Html", "css", "Nextjs", "Typescript", "reduxjs/toolkit", "sass", "Antd", "tailwindcss"]
        },
        {
            title: "www.sepid-sabt.ir",
            description: "Company Website (Wordpress website)",
            url: "https://sepid-sabt.ir/",
            repoUrl: null,
            cover: sepidSabt,
            technologies: ["Html", "css", "jquery", "wordpress"]
        },

    ]

    return (
        <section className="py-10 md:py-20 bg-stone-100">
            <div className="max-w-7xl mx-auto px-3">
                <h3 className="font-semibold text-xl md:text-3xl text-amber-500 mb-2 md:mb-4">
                    Projects
                </h3>

                <div className="md:grid md:grid-cols-3 md:gap-10">
                    {projects.map(project => (
                        <div key={project.title} className="mb-6">
                            <Image src={project.cover} alt={project.title} className="rounded mb-2" />
                            <div className="sm:p-3">
                                <a href={project.url}>{project.title}</a>
                                <div className="flex gap-1 flex-wrap">
                                    {project.technologies.map(technology => <span key={technology} className="tag"> {technology} </span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;