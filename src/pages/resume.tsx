import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

function Resume(){
    type TestimonialType = {title: string; items: string[]}[]
    const [tools] = useState<TestimonialType>(
        [
            {
                title: "Mobile App",
                items: ['React Native', 'Expo React Native', 'XCode', 'Android Studio Code', 'App Store', 'Google Play Store']
            },
            {
                title: "Web/Backend",
                items: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL', 'RESTful API Design', 'React Vite', 'HTML', 'CSS', 'Javascript', 'Tailwind css']
            },
            {
                title: "Devops",
                items: ['Ubuntu Linux', 'Cloud Panel', 'Digital Ocean', 'AWS',]
            },
            {
                title: "Other",
                items: ['Git', 'Github', 'Postman', 'VScode', 'Clickup', 'Redis', 'RabbitMQ']
            },
        ]
    )

    return(
        <div className="w-full mt-16 flex flex-col items-start pb-16">
            <div className="flex flex-col items-start">
                <p className="font-inter-semi m-0 text-[25px] text-gray-700">
                    Resume
                </p>
                <p className="font-inter-regular m-0 text-[18 px] text-gray-700 mt-4">
                    Proving track record in web development (frontend and backend).
                </p>
            </div>


            <p className="flex text-[28px] font-inter-medium text-gray-700 mt-14 bg-gray-100 w-full px-2">
                Work Experience
            </p>
            <div className="w-full space-y-10">
                <div className="flex flex-col items-start">


                    <div className="border-b border-gray-300 pb-5">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-row items-center justify-between w-full mt-5">
                                <div className="flex flex-col items-start">
                                    <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                                        Babyducts (Remote) – Lagos NG
                                    </p>
                                    <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                                        Python Software Engineer
                                    </p>
                                </div>
                                <p className="font-inter-medium m-0 text-gray-500">
                                    2023 - Present
                                </p>
                            </div>

                            <p className="font-inter-regular text-start text-gray-700 mt-4">
                                This has given me a depth of experience and expertise with building Web apps. But while my focus is on building efficient and scalable backend system, I’m also skilled as a full-stack development. <br/><br/>As the Python Software Engineer, I:
                            </p>

                            <ul className="list-disc flex flex-col items-start ml-8 text-gray-700 mt-5 text-[17px] space-y-1">
                                <li className="text-start">
                                    Developed and maintained a secure user authentication with distinct roles for buyers, sellers, and admin, ensuring user interaction and secure transactions.
                                </li>
                                <li className="text-start">
                                    Designed and implemented a scalable database schema using PostgreSQL for efficient storage and retrieval of large datasets related to products, orders and user information. 
                                </li>
                                <li className="text-start">
                                    Designed and implemented a scalable database schema using PostgreSQL for efficient storage and retrieval of large datasets related to products, orders and user information. 
                                </li>
                                <li className="text-start">
                                    Collaborated with frontend developers to integrate RESTful APIs, ensuring smooth communication between front-end and back-end systems.
                                </li>
                                <li className="text-start">
                                    Conducted regular code reviews and deployed continuous integration/continuous deployment (CI/CD) pipelines to maintain code quality and automate deployments.
                                </li>
                            </ul>

                            <a 
                            className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                            href="https://babyducts-buyer.vercel.app/"
                            target="_blank"
                            >
                                https://babyducts.com
                            </a>
                        </div>
                    </div>
                    


                    <div className="border-b border-gray-300 pb-5 mt-5">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-row items-center justify-between w-full mt-5">
                                <div className="flex flex-col items-start">
                                    <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                                        NALISS TASUED
                                    </p>
                                    <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                                        Software Engineer
                                    </p>
                                </div>
                                <p className="font-inter-medium m-0 text-gray-500">
                                    2024
                                </p>
                            </div>

                            {/* <p className="font-inter-regular text-start text-gray-700 mt-4">
                                This has given me a depth of experience and expertise with building Mobile apps and enabled me to implement my full-stack abilities. <br/><br/>As the Full-Stack Developer, I:
                            </p> */}

                            <ul className="list-disc flex flex-col items-start ml-8 text-gray-700 mt-5 text-[17px] space-y-1">
                                <li className="text-start">
                                    Collaborated with the student union representatives to gather requirements and define the scope of the voting system, ensuring it met all necessary functionality and compliance standards.
                                </li>
                                <li className="text-start">
                                    Ensured that I designed according to the Figma File which the Product Designer provided.
                                </li>
                                <li className="text-start">
                                    Designed and implemented a scalable database schema using PostgreSQL to store voter information, candidates, election results, and logs of voting activity.
                                </li>
                                <li className="text-start">
                                    Implemented secure user authentication using Laravel’s built-in authentication system, incorporating multi-factor authentication (MFA) for enhanced security.
                                </li>
                                <li className="text-start">
                                    Enabled real-time vote counting and result presentation with robust data validation and integrity checks to prevent discrepancies.
                                </li>
                            </ul>

                            <a 
                            className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                            href="https://voting.nalisstasued.com"
                            target="_blank"
                            >
                                https://voting.nalisstasued.com
                            </a>
                        </div>
                    </div>




                    <div className="border-b border-gray-300 pb-5 mt-5">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-row items-center justify-between w-full mt-5">
                                <div className="flex flex-col items-start">
                                    <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                                        HNG-11	Remote
                                    </p>
                                    <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                                        Software Engineer
                                    </p>
                                </div>
                                <p className="font-inter-medium m-0 text-gray-500">
                                    2023
                                </p>
                            </div>

                            {/* <p className="font-inter-regular text-start text-gray-700 mt-4">
                                This has given me a depth of experience and expertise with building Mobile apps and enabled me to implement my full-stack abilities. <br/><br/>As the Full-Stack Developer, I:
                            </p> */}

                            <ul className="list-disc flex flex-col items-start ml-8 text-gray-700 mt-5 text-[17px] space-y-1">
                                <li className="text-start">
                                    Contributed to multiple backend projects, developing and optimizing APIs using Django Rest Framework (DRF).
                                </li>
                                <li className="text-start">
                                    Collaborated with senior developers on code reviews, learning best practices in software development and deployment, which provided a vast knowledge of message broker (redis, rabbitmq), gunicorn and nginx.
                                </li>
                                <li className="text-start">
                                    Worked on real-world projects, including user authentication systems, payment processing integrations, and database management.
                                </li>
                                <li className="text-start">
                                    Gained hands-on experience with version control systems like Git and participated in team sprints and daily stand-ups.
                                </li>
                            </ul>

                            <a 
                            className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                            href="https://certgo.app/c-30b0a16a"
                            target="_blank"
                            >
                                https://certgo.app/c-30b0a16a
                            </a>
                        </div>
                    </div>



                    <div className="border-b border-gray-300 pb-5 mt-5">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-row items-center justify-between w-full mt-5">
                                <div className="flex flex-col items-start">
                                    <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                                        Pickeat (Remote) – Lagos NG
                                    </p>
                                    <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                                        Mobile App Developer
                                    </p>
                                </div>
                                <p className="font-inter-medium m-0 text-gray-500">
                                    2024
                                </p>
                            </div>

                            <p className="font-inter-regular text-start text-gray-700 mt-4">
                                This has given me a depth of experience and expertise with building Mobile apps and enabled me to implement my full-stack abilities. <br/><br/>As the Full-Stack Developer, I:
                            </p>

                            <ul className="list-disc flex flex-col items-start ml-8 text-gray-700 mt-5 text-[17px] space-y-1">
                                <li className="text-start">
                                    Developed and maintained a secure user authentication with distinct roles for buyer, and vendors, ensuring user interaction and secure transactions
                                </li>
                                <li className="text-start">
                                    Built and maintained backend APIs in Python for handling user authentication, product management, and order processing.
                                </li>
                                <li className="text-start">
                                    Integrated payment gateways and ensured smooth checkout processes for users. 
                                </li>
                                <li className="text-start">
                                    Implemented dynamic product listings and vendor-buyer management feature.
                                </li>
                                <li className="text-start">
                                    Ensured scalable, efficient, and secure data handling with robust backend logic and database management.
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* <div className="border-b border-gray-300 pb-5 mt-5">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-row items-center justify-between w-full mt-5">
                                <div className="flex flex-col items-start">
                                    <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                                        Tradewize (Remote)
                                    </p>
                                    <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                                        Python Software Engineer
                                    </p>
                                </div>
                                <p className="font-inter-medium m-0 text-gray-500">
                                    2025
                                </p>
                            </div>

                            <p className="font-inter-regular text-start text-gray-700 mt-4">
                                This has given me a depth of experience and expertise with building Mobile apps and enabled me to implement my full-stack abilities. <br/><br/>As the Python Software Engineer, I:
                            </p>

                            <ul className="list-disc flex flex-col items-start ml-8 text-gray-700 mt-5 text-[17px] space-y-1">
                                <li className="text-start">
                                    Developed and maintained a secure user authentication with distinct roles for buyer, and vendors, ensuring user interaction and secure transactions
                                </li>
                                <li className="text-start">
                                    Built and maintained backend APIs in Python for handling user authentication, product management, and order processing.
                                </li>
                                <li className="text-start">
                                    Integrated payment gateways and ensured smooth checkout processes for users. 
                                </li>
                                <li className="text-start">
                                    Implemented dynamic product listings and vendor-buyer management feature.
                                </li>
                                <li className="text-start">
                                    Ensured scalable, efficient, and secure data handling with robust backend logic and database management.
                                </li>
                            </ul>
                        </div>
                    </div> */}

                </div>
            </div>



            <p className="flex text-[28px] font-inter-medium text-gray-700 mt-24 bg-gray-100 w-full px-2">
                Education
            </p>
            <div className="w-full">
                <div className="flex flex-row items-center justify-between w-full mt-5">
                    <div className="flex flex-col items-start">
                        <p className="font-inter-semi m-0 text-[18px] text-gray-700">
                            Federal University Oye - Ekiti
                        </p>
                        <p className="font-inter-medium m-0 text-[18px] text-gray-500">
                            Bsc. Computer Engineering
                        </p>
                    </div>
                    <p className="font-inter-medium m-0 text-gray-500">
                        2021 - Present
                    </p>
                </div>
            </div>







            <p className="flex text-[28px] font-inter-medium text-gray-700 mt-24 bg-gray-100 w-full px-2">
                Skills
            </p>
            <div className="w-full mt-4 space-y-3">
                <div className="flex justify-between w-full pl-5 items-center">
                    <p className="font-inter-regulari m-0 text-[18px] text-gray-700">
                        Backend Development
                    </p>
                    <div className="w-[50%]">
                        <ProgressBar progress={95} color="bg-blue-600" />
                    </div>
                </div>
                <div className="flex justify-between w-full pl-5 items-center">
                    <p className="font-inter-regulari m-0 text-[18px] text-gray-700">
                        Frontend Development
                    </p>
                    <div className="w-[50%]">
                        <ProgressBar progress={70} color="bg-blue-600" />
                    </div>
                </div>
                <div className="flex justify-between w-full pl-5 items-center">
                    <p className="font-inter-regulari m-0 text-[18px] text-gray-700">
                        Mobile App Development
                    </p>
                    <div className="w-[50%]">
                        <ProgressBar progress={70} color="bg-blue-600" />
                    </div>
                </div>
                <div className="flex justify-between w-full pl-5 items-center">
                    <p className="font-inter-regulari m-0 text-[18px] text-gray-700">
                        Devops
                    </p>
                    <div className="w-[50%]">
                        <ProgressBar progress={50} color="bg-blue-600" />
                    </div>
                </div>
            </div>




            <p className="flex text-[28px] font-inter-medium text-gray-700 mt-24 bg-gray-100 w-full px-2">
                All Tools
            </p>
            <div className="space-y-5 mt-5 pl-5">
                {tools.map((item, _) => (
                    <div 
                    className=""
                    key={_}
                    >
                        <p className="font-inter-semi text-start text-gray-800 text-[20px]">
                            {item.title}
                        </p>
                        <div className="flex flex-row space-x-2 flex-wrap mt-2">
                            {item.items.map((sub_item, _) => (
                                <p key={_} className="rounded-lg bg-gray-200 px-2 text-gray-700 font-montserrat-regular text-[14px]">
                                    {sub_item}
                                </p>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>




            <div className="flex items-center justify-around mt-28 mb-10 space-x-4">
                <a className="bg-gray-700 hover:bg-gray-500 flex items-center py-2 px-2 rounded-lg text-white font-inter-regular" href="/contact">
                    Let's talk
                    <img className="w-5 h-5 ml-2" src="/send.png" alt="send" />
                </a>
                <a className="border border-gray-700 flex items-center py-2 px-2 rounded-lg text-gray-700 font-inter-regular" href="/portfolio">
                    View my work
                </a>
            </div>
        </div>
    );
};

export default Resume;
