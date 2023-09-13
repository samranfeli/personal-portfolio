import Image from "next/image";

import itours from '../assets/itours.png';
import dadepardaz from '../assets/dadepardaz.png';
import raahbar from '../assets/raahbar.png';

const Experiences = () => {

    const experiences = [
        {
            employerLogo: itours,
            employerTitle: 'Itours',
            employmentTime: 'Jan 2019 - Present',
            tasks: [
                'Develope B2B selling platform ("agent.itours.no") with Html5, Css3, React, Typescript and Ant Design.',
                'Translate designs and wireframes into high-quality code using Html5, Css3, Es6 and React and Create responsive user interfaces for B2C booking system ("itours.co", "namintravel.com",...)',
                'Create html email templates to use for sending reserved flight ticket and booked hotel voucher.',
                'Start creating new Application for B2C websites using Next.js, Typescript, Tailwindcss and Ant Design (under development).'
            ]
        },
        {
            employerLogo: dadepardaz,
            employerTitle: 'Dadehpardaz',
            employmentTime: 'Jan 2018 -Jan 2019',
            tasks: [
                'Create static landing pages such as "mci.ir/notrino-settings" based on given design using Html5, Css3, Bootstrap and Jquery.'
            ]
        },
        {
            employerLogo: raahbar,
            employerTitle: 'Raahbar',
            employmentTime: 'Dec 2016 - Jan 2018',
            tasks: [
                'Create over 10 website html themes with static contents using Html5, Css3, Jquery, Bootstrap and Foundtation.'
            ]
        },
        {
            employerLogo: null,
            employerTitle: 'Roshan Jahan Afarin',
            employmentTime: 'May 2016 - Nov 2016',
            tasks: [
                'Some UI changes in websites created with drupal.'
            ]
        },

    ]
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-3">
                <h3 className="font-semibold text-xl md:text-3xl text-amber-500 mb-2 md:mb-8">
                    Experiences
                </h3>

                {experiences.map(experience => (
                    <article key={experience.employerTitle} className="mb-4 md:mb-10 md:pl-4 md:pl-8">
                        <div className="flex items-center mb-4">
                            {!!experience.employerLogo && <Image src={experience.employerLogo} alt={experience.employerTitle} className="w-6 md:w-10 mr-2 md:mr-4" />}
                            <h4 className="font-semibold text-md md:text-xl">
                                {experience.employerTitle}
                            </h4>
                            <span className="border-b border-dotted border-stone-400 flex-auto block mx-4" />
                            <span className="text-xs md:text-base">{experience.employmentTime}</span>
                        </div>
                        <ul className="list-disc list-inside pl-4 text-sm md:text-base">
                            {experience.tasks.map(task => (
                                <li className="mb-4" key={task}>{task}</li>
                            ))}
                        </ul>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Experiences;