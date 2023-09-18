import {GitHubIcon, LinkedinIcon, StackOverFlowIcon } from "../assets/icons";

const Contact = () => {

    const socialMediaIconClassNames = "inline-block transition-all text-gray-400 hover:text-amber-500";

    const socialMediaData = [
        {
            title:"Github", 
            url:"https://github.com/samranfeli",
            icon : <GitHubIcon className={socialMediaIconClassNames} />
        },
        {
            title:"LinkedIn", 
            url:"https://linkedin.com/in/samranfeli",
            icon : <LinkedinIcon className={socialMediaIconClassNames} />
        },
        {
            title:"StackOverflow", 
            url:"https://stackoverflow.com/users/22234721/samran-feli",
            icon : <StackOverFlowIcon className={socialMediaIconClassNames} />
        }
    ];

    return (
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-3 text-gray-400">
                <h3 className="font-semibold text-xl md:text-3xl text-amber-500 mb-5 md:mb-8 md:text-center">
                    Contact
                </h3>
                <p  className="text-center max-w-3xl mx-auto mb-6">
                    If you have any questions, please feel free to contact me. If you don't get an answer immediately,I'll get back to you as soon as possible.
                </p>
                
                <div className="flex justify-between items-center mb-2 max-w-xs mx-auto md:px-6">
                    <label>Telephone: </label>
                    <a href="tel:+989374755674" className="text-amber-500">+989374755674</a>
                </div>   

                <div className="flex justify-between items-center mb-8 max-w-xs mx-auto md:px-6">
                    <label>Email: </label>
                    <a href="mailto:samran.f.m@gmail.com" className="text-amber-500" >samran.f.m@gmail.com</a>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    {socialMediaData.map(item => (
                        <a 
                            href={item.url} 
                            target="_blank"
                            className="block"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;