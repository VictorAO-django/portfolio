import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout: React.FC = () =>{
    const pathname = window.location.pathname

    return (
        <div className="">
            <div className="bg-white flex items-center mx-auto w-[75%] my-5">
                <div className="flex flex-row space-x-8">        
                    <p className="font-inter-medium m-0 text-[18px] text-gray-700">
                        Olusola Ayomide
                    </p>
                    <div className="flex flex-row items-center space-x-3">
                        <div className=" bg-custom-green h-7 w-12 rounded-full flex items-center justify-end">
                            <div className="w-6 h-6 mr-[2px] rounded-full bg-white"></div>
                        </div>
                        <p className="font-montserrat-regular m-0 text-sm text-gray-600">
                            Available Now
                        </p>
                    </div>
                    
                </div>
                <div className="flex items-center ml-auto">
                    <NavLink to="/" className={`text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname !== '/') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Home
                    </NavLink>
                    <NavLink to="/resume" className={`text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'resume') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Resume
                    </NavLink>
                    <NavLink to="/portfolio" className={`text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'portfolio') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" className={`text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'contact') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Contact
                    </NavLink>
                </div>
            </div>
            
            <div className="w-[75%] mx-auto mb-16">
                <Outlet />
            </div>

            <div className="mt-14 flex justify-around bg-gray-100 p-8 fixed bottom-0 w-full">
                <p>
                    © 2024 Olusola Ayomide. All rights reserved
                </p>
                <div className="flex space-x-3">
                    <p className="">Get in touch:</p>
                    <a 
                    href="https://github.com/VictorAO-django"
                    target="_blank"
                    className="flex items-center justify-around bg-gray-800 rounded-full w-7 h-7">
                        <img className="w-4 h-4" src="/github.png" alt="github" />
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/victor-olusola-a59493276"
                    target="_blank"
                    className="flex items-center justify-around bg-gray-800 rounded-full w-7 h-7">
                        <img className="w-3 h-3" src="/linkedin-logo.png" alt="linkedin" />
                    </a>
                    <a 
                    href="https://discordapp.com/users/victorao_51904"
                    target="_blank"
                    className="flex items-center justify-around bg-gray-800 rounded-full w-7 h-7">
                        <img className="w-4 h-4" src="/discord.png" alt="discord" />
                    </a>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Layout;