// import { useState } from "react";

function Contact(){
    return(
        <div className="w-full mt-16 flex flex-col items-start pb-16">
            <div className="flex flex-col items-start">
                <p className="font-inter-semi m-0 text-[25px] text-gray-700">
                    Contact me
                </p>
                <p className="font-inter-regular m-0 text-[18 px] text-gray-700 mt-1">
                    Get in touch and see what we can create together.
                </p>
            </div>

            <div className="w-full bg-gray-100 rounded-2xl mt-8">
                <form className="w-full p-5" action="">
                    <div className="flex flex-row justify-between w-full space-x-5">
                        <div className="grow space-y-8">
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Name <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="Mark Taylor" 
                                type="text" 
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Email Address <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="E.g John@gmail.com" 
                                type="email" 
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                        </div>
                        <div className="grow space-y-8">
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Phone Number <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="E.g +234 7063475466" 
                                type="tel" 
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Business url <span className="text-red-600"></span>
                                </p>
                                <input 
                                placeholder="E.g https://www.example.com" 
                                type="text" 
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;