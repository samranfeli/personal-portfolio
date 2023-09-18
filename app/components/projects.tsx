import Image, { StaticImageData } from "next/image";

import charity from '../assets/projects/charity.jpg';
import enriskconsulting from '../assets/projects/enriskconsulting.jpg';
import ganjoor from '../assets/projects/ganjoor.jpg';
import goodwin from '../assets/projects/goodwin.jpg';
import samran from '../assets/projects/samran.jpg';
import sanazafshari from '../assets/projects/sanazafshari.jpg';
import sepidSabt from '../assets/projects/sepid-sabt.jpg';

const Projects = () => {

    const projects : {
        title: string;
        description: string;
        url: string;
        repoUrl: string | null;
        cover: StaticImageData;
        technologies: string[];
        isHtmlTheme?: boolean;
    }[] = [
        {
            title: "www.ganjoor.vercel.app",
            description: "a Next.js app project using ganjoor API",
            url: "https://ganjoor.vercel.app/",
            repoUrl: "https://github.com/samranfeli/ganjoor",
            cover: ganjoor,
            technologies: ["Html", "Css", "Nextjs", "Typescript", "Reduxjs/toolkit", "Sass", "Antd", "Tailwindcss"]
        },
        {
            title: "www.enriskconsulting.com",
            description: "Company Website (Wordpress website)",
            url: "https://enriskconsulting.com",
            repoUrl: null,
            cover: enriskconsulting,
            technologies: ["Html", "Css", "Jquery", "Wordpress"]
        },
        {
            title: "Imam Reza Charity",
            description: "Company Website (Html theme)",
            url: "http://samran.ir/html/charity",
            repoUrl: null,
            cover: charity,
            technologies: ["Html", "Css", "Foundation", "Jquery"],
            isHtmlTheme: true
        },
        {
            title: "Goodwin",
            description: "Company Website (Html theme)",
            url: "http://samran.ir/html/goodwin/",
            repoUrl: null,
            cover: goodwin,
            technologies: ["Html", "Css", "Foundation", "Jquery"],
            isHtmlTheme: true
        },
        {
            title: "www.sepid-sabt.ir",
            description: "Company Website (Wordpress website)",
            url: "https://sepid-sabt.ir/",
            repoUrl: null,
            cover: sepidSabt,
            technologies: ["Html", "Css", "Jquery", "Wordpress"]
        },
        {
            title: "www.samran.ir",
            description: "Artist personal website (Wordpress website)",
            url: "http://samran.ir",
            repoUrl: null,
            cover: samran,
            technologies: ["Html", "Css", "Jquery", "Wordpress"]
        },
        {
            title: "www.sanazafshari.com",
            description: "Artist personal website (Wordpress website)",
            url: "http://sanazafshari.com/",
            repoUrl: null,
            cover: sanazafshari,
            technologies: ["Html", "Css", "Jquery", "Wordpress"]
        },

    ]

    return (
        <section className="py-10 md:py-20 bg-stone-100 text-stone-600 dark:bg-stone-500/25 dark:text-inherit">
            <div className="max-w-7xl mx-auto px-3">
                <h3 className="font-semibold text-xl md:text-3xl text-amber-500 mb-5 md:mb-8 md:text-center">
                    Projects
                </h3>

                <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:gap-10 max-w-4xl mx-auto">
                    {projects.map(project => (
                        <div key={project.title} className="mb-14 sm:mb-0 relative group md:border md:border-stone-300 rounded cursor-crosshair">
                            <Image src={project.cover} alt={project.title} className="block rounded mb-2 md:mb-0 w-full" />
                            <div className="md:p-3 md:absolute md:right-0 md:left-0 md:top-0 md:bottom-0 md:bg-amber-500 md:text-white md:flex md:flex-col md:justify-center items-center transition-all md:opacity-0 md:hover:opacity-100 md:rounded duration-500">
                                <h3 className="font-bold text-xl md:mb-3 md:translate-x-4 group-hover:md:translate-x-0 transition-all duration-500">{project.title}</h3>
                                <p className="text-sm mb-2 block text-stone-400 md:text-white md:mb-4 md:-translate-x-4 group-hover:md:translate-x-0 transition-all duration-500" >{project.description}</p>
                                <div className="flex gap-1 flex-wrap md:justify-center mb-4 md:mb-6">
                                    {project.technologies.map(technology => <span key={technology} className="tag"> {technology} </span>)}
                                </div>
                                <div className="flex gap-2">
                                    <a 
                                        href={project.url} 
                                        className="font-semibold border rounded py-1 px-4 block bg-sky-600 text-white md:bg-white md:text-amber-500 text-center grow" 
                                    >
                                         View {project.isHtmlTheme? "Theme" : "Website"} 
                                    </a>
                                    {project.repoUrl && <a href={project.repoUrl} className="font-semibold md:bg-white md:text-amber-500 border rounded py-1 px-4 block bg-sky-600 text-white text-center grow" > View Code </a>}
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