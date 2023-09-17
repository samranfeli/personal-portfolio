import Image from "next/image";

import profilePicture from '../assets/profile.png';

const About = () => {
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-3">
                <div className="md:flex md:items-center md:gap-14">
                    <Image src={profilePicture} alt="Samran Feli Moghadam" className="rounded-lg bg-stone-200 aspect-square w-20 md:w-60 mb-3 md:mb-0"  />
                    <div className="text-sm md:text-base">
                        <h3 className="font-semibold text-xl md:text-3xl text-amber-500 mb-2 md:mb-4">
                            About me
                        </h3>
                        <p className="mb-3">
                        My name is Samran and I&apos;m a front-end developer based in Tehran. I describe myself as a passionate developer who loves coding, design and working with visual elements.
                        </p>
                        <p className="mb-3">
                        Aside from my job, I like to contribute in diverse projects. It helps me to learn new stuffs and grow as a developer.
                        </p>
                        <p className="mb-3">
                        In my free time you can find me in Hiking and mountaineering or at art drawing studios.
                        </p>
                        <a href="/files/resume.pdf" className="rounded-lg font-semibold text-white text-lg md:text-2xl bg-amber-500 px-4 py-1 md:py-3 inline-block transition-all hover:bg-amber-400" download >
                            Download Resume
                        </a>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default About;