import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { X, ChevronUp } from "lucide-react";

const Layout: React.FC = () =>{
    const pathname = window.location.pathname
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="">
            <div className="bg-white flex items-center mx-auto w-full px-5 lg:px-0 lg:w-[75%] lg:my-5">
                <div className="flex flex-row space-x-2 lg:space-x-8">        
                    <p className="font-inter-semi m-0 text-[15px] lg:text-[18px] text-gray-700">
                        Olusola Ayomide
                    </p>
                    <div className="flex flex-row items-center space-x-3">
                        <div className=" bg-custom-green h-5 w-10 lg:h-7 lg:w-12 rounded-full flex items-center justify-end">
                            <div className="w-4 h-4 mr-[3px] lg:w-6 lg:h-6 lg:mr-[2px] rounded-full bg-white"></div>
                        </div>
                        <p className="font-montserrat-regular m-0 text-sm text-gray-600">
                            Available Now
                        </p>
                    </div>
                    
                </div>
                <div className="flex items-center ml-auto">
                    <NavLink to="/" className={`hidden lg:flex text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname !== '/') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Home
                    </NavLink>
                    <NavLink to="/resume" className={`hidden lg:flex text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'resume') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Resume
                    </NavLink>
                    <NavLink to="/portfolio" className={`hidden lg:flex text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'portfolio') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" className={`hidden lg:flex text-[15px] text-gray-700 font-inter-regular px-4 py-2 border-b-[3.5px] ${(pathname == 'contact') && "border-gray-700"} border-white hover:border-gray-700`}>
                        Contact
                    </NavLink>
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-4 text-black sm:hidden focus:outline-none"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`w-full fixed inset-0 bg-gray-900 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 sm:hidden`}
                onClick={toggleSidebar}
            >
                {/* Sidebar content */}
                <div className="w-[80%] bg-white text-gray-700 p-8 h-full flex flex-col items-start" onClick={(e) => e.stopPropagation()}>
                    <div
                    onClick={toggleSidebar}
                    className="border border-gray-300 rounded-full flex items-center justify-around p-2 self-end"
                    >
                        <X size={28} />
                    </div>
                    <h2 className="text-xl font-montserrat-medium">Olusola Ayomide</h2>
                    <ul className="flex flex-col items-start space-y-3 mt-5">
                        <li>
                            <NavLink to="/" className={`text-[16px] text-gray-700 font-inter-regular py-2 `}>
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="/resume" className={`text-[16px] text-gray-700 font-inter-regular py-2 ${(pathname == 'resume') && "border-b-[3.5px] border-gray-700"}`}>
                               Resume
                            </NavLink>
                        </li>
                        <li className="flex items-center space-x-2">
                            <NavLink to="/portfolio" className={`text-[16px] text-gray-700 font-inter-regular py-2 ${(pathname == 'portfolio') && "border-b-[3.5px] border-gray-700"}`}>
                                Portfolio
                            </NavLink>
                            <ChevronUp size={22} />
                        </li>

                        <ul className="flex flex-col items-start ml-10 space-y-3">
                            <li>
                                <NavLink to="portfolio/babyducts-ecommerce-website" className={`text-[16px] text-gray-700 font-inter-regular py-2 `}>
                                    Babyducts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio/naliss-tasued-website" className={`text-[16px] text-gray-700 font-inter-regular py-2 `}>
                                    Naliss Tasued 
                                </NavLink>
                            </li>
                        </ul>

                        <li>
                            <NavLink to="/contact" className={`text-[16px] text-gray-700 font-inter-regular py-2 ${(pathname == 'contact') && "border-b-[3.5px] border-gray-700"}`}>
                                Contact 
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex items-center justify-around space-x-4 my-auto self-center">
                        <a className="bg-gray-700 hover:bg-gray-500 flex items-center py-1 lg:py-2 px-8 rounded-lg text-white font-inter-regular" href="/contact">
                            Let's talk
                            <img className="w-4 h-4 lg:w-5 lg:h-5 ml-2" src="/send.png" alt="send" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="px-5 lg:px-0 lg:w-[75%] mx-auto mb-16">
                <Outlet />
            </div>

            <div className="mt-14 flex flex-col-reverse lg:flex-row justify-around  bg-gray-100 p-4 lg:p-8 fixed bottom-0 w-full">
                <p className="pt-2 lg:pt-0">
                    © 2024 Olusola Ayomide. All rights reserved
                </p>
                <div className="flex space-x-3 flex-col items-center space-y-2 lg:flex-row">
                    <p className="">Get in touch:</p>
                    <div className="flex space-x-3">
                        <a 
                        href="https://github.com/VictorAO-django"
                        target="_blank"
                        className="flex items-center justify-around bg-gray-800 rounded-full w-7 h-7">
                            <img className="w-3 h-3 lg:w-4 lg:h-4" src="/github.png" alt="github" />
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
                            <img className="w-3 h-3 lg:w-4 lg:h-4" src="/discord.png" alt="discord" />
                        </a>
                    </div>   
                </div>
            </div>
            
        </div>
    );
};

export default Layout;