// import { useState } from "react";

function Resume(){

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
                <a className="bg-gray-700 flex items-center py-2 px-2 rounded-lg text-white font-inter-regular" href="">
                    Let's talk
                    <img className="w-5 h-5 ml-2" src="/send.png" alt="send" />
                </a>
                <a className="border border-gray-700 flex items-center py-2 px-2 rounded-lg text-gray-700 font-inter-regular" href="">
                    View my work
                </a>
            </div>

            <div className="w-full mt-14 space-y-10">
                <div className="flex flex-col items-start">
                    <p className="flex text-[28px] font-inter-medium text-gray-700">
                    About me
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    As a self taught programmer I learned the trade after graduating with a degree in Electrical Engineering. Within one year of graduating I had completed my first client app, created a side-startup company and landed a software development job.
                    </p>
                    <p className="font-inter-regular text-start text-gray-600 mt-2">
                    Over those years I fell in love with iOS development and started offering my skills as a contractor. I now work as a contractor full time expertly crafting the next generation of iOS apps.
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
                    With over a decade of practical knowledge and experience I am your on hand expert to answer your questions. From industry standards, technical possibilities to code reviews my knowledge can be used to help make your project more successful.
                    </p>

                    <a 
                    className="font-inter-medium text-sm text-start text-blue-500 mt-8" 
                    href=""
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
                    href=""
                    >
                        Check me out on LinkenIn
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Resume;