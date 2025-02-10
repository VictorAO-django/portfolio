import { useState } from "react";

function Home(){

    type TestimonialType = {content: string; name: string; position: string}[]
    const [testimonial, setTestimonial] = useState<TestimonialType>()

    setTestimonial(
        [
            {
                content: "To make a long story short, I was impressed to see how nicely and efficiently, Techne Coding’s, app works for Queen City Bookstore. It has allowed us to grow our business in ways I never had imagined. I highly recommend this company over many in Western New York.",
                name: "Queen City Bookstore, Inc",
                position: "Andrew Wood"
            },
            {
                content: "To make a long story short, I was impressed to see how nicely and efficiently, Techne Coding’s, app works for Queen City Bookstore. It has allowed us to grow our business in ways I never had imagined. I highly recommend this company over many in Western New York.",
                name: "Rendr",
                position: "CEO Emil Novak"
            },
            {
                content: "To make a long story short, I was impressed to see how nicely and efficiently, Techne Coding’s, app works for Queen City Bookstore. It has allowed us to grow our business in ways I never had imagined. I highly recommend this company over many in Western New York.",
                name: "Avocados and Coconuts",
                position: "CEO Startup"
            },
            {
                content: "After using previous developers for my app, Chromatic, we were looking for someone trustworthy and knowledgable to enhance the platform. With Rob’s help we were able to reduce the maintenance risk, add unique features and assess key areas of growth for the app. I was pleasantly surprised at the integrity, professionalism and down to earth explanations Rob gave to help us make critical decisions for the app. The quality was so good we ended up scrapping most of our initial version and rebuilding it from the ground up with him.  So if you’re looking for a top-shelf developer I highly recommend Rob for your next app project.",
                name: "Chromatic",
                position: "Deva Finger"
            },
        ]
    )
    return(
        <div className="w-full mt-20 flex flex-col items-center pb-16">
            <div className="w-40 h-40 flex items-center rounded-full overflow-hidden mx-auto">
                <img
                className=""
                src="/haywhy.jpg" alt="haywhy" />
            </div>

            <div>
                <p className="font-inter-semi m-0 text-[25px] text-gray-700 mt-5">
                    Olusola Ayomide - Software Engineer
                </p>
                <p className="font-inter-regular m-0 text-[15px] text-gray-700">
                Crafting maintainable high quality Web and Mobile Apps
                </p>
            </div>

            <div className="flex items-center justify-around mt-8 space-x-4">
                <a className="bg-gray-700 hover:bg-gray-500 flex items-center py-2 px-2 rounded-lg text-white font-inter-regular" href="/contact">
                    Let's talk
                    <img className="w-5 h-5 ml-2" src="/send.png" alt="send" />
                </a>
                <a className="border border-gray-700 flex items-center py-2 px-2 rounded-lg text-gray-700 font-inter-regular" href="/portfolio">
                    View my work
                </a>
            </div>

            <div className="w-full mt-14 space-y-10">
                <div className="flex flex-col items-start">
                    <p className="flex text-[28px] font-inter-medium text-gray-700">
                    About me
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    As a self taught programmer I learned the trade while studying for a degree in Computer Engineering. During my years of study I had completed my first client project, landed a software development job.
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    Over those years I fell in love with Backend & Frontend development and started offering my skills as a contractor and as a part-time worker. I am open to work as a contractor to expertly craft the next generation of Web and Mobile apps.
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <p className="flex text-[28px] font-inter-medium text-gray-700">
                    Providing Value
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    As a self taught programmer I learned the trade after graduating with a degree in Electrical Engineering. Within one year of graduating I had completed my first client app, created a side-startup company and landed a software development job.
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    Over those years I fell in love with iOS development and started offering my skills as a contractor. I now work as a contractor full time expertly crafting the next generation of iOS apps.
                    </p>

                    <a 
                    className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                    href=""
                    >
                        Check blogs on Hashnode
                    </a>
                </div>
                
                <div className="flex flex-col items-start">
                    <p className="flex text-[28px] font-inter-medium text-gray-700">
                    Expert Advice
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    With over 4 years of practical knowledge and experience I am your on hand expert to answer your questions. From industry standards, technical possibilities to code reviews my knowledge can be used to help make your project more successful.
                    </p>

                    <a 
                    className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                    href="/resume"
                    >
                        View my full resume 
                    </a>
                </div>

                <div className="flex flex-col items-start">
                    <p className="flex text-[28px] font-inter-medium text-gray-700">
                    Personality Matters
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    “Easy to work with”, “Fun and Personable” are how some have described working with me. Whether in a team environment, or as an independent developer, I help create a great atmosphere to work around.
                    </p>

                    <a 
                    className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                    href="https://www.linkedin.com/in/victor-olusola-a59493276"
                    target="_blank"
                    >
                        Check me out on LinkenIn
                    </a>
                </div>
            </div>

            <div
            className="mt-16 flex flex-col items-center"
            >
                <p className="flex text-[25px] font-inter-medium text-gray-700 mb-5">
                    Testimonials
                </p>
                <div 
                className="grid grid-cols-2 gap-6"
                >
                    {testimonial.map((item, _) => (
                        <div 
                        className="border-gray-300 rounded-xl p-6 flex flex-col items-start justify-between min-h-80 border shadow-sm"
                        key={_}
                        >
                            <p className="text-start text-gray-600 text-[16px]">
                                "{item.content}"
                            </p>

                            <div className="flex flex-col items-start">
                                <p className="mt-10 font-inter-medium text-[17px]">
                                    {item.name}
                                </p>
                                <p className="text-gray-600 text-[16px]">
                                    {item.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
