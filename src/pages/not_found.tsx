import { NavLink } from "react-router-dom";

function NotFound(){
    return(
        <div className="pl-10 pt-8 border flex flex-col items-center min-h-screen bg-display bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-14 border-2 rounded-full ">
                    <NavLink to="/" className="text-[13px] text-gray-500 rounded-full font-montserrat-medium px-6 py-1 mx-2 my-1 hover:text-custom-orange-hover hover:bg-amber-200 transition duration-300">
                        Home
                    </NavLink>
                    <NavLink to="/" className="text-[13px] text-gray-500 rounded-full font-montserrat-medium px-6 py-1 mx-2 my-1 hover:text-custom-orange-hover hover:bg-amber-200 transition duration-300">
                        Docs
                    </NavLink>
                    <NavLink to="/" className="text-[13px] text-gray-500 rounded-full font-montserrat-medium px-6 py-1 mx-2 my-1 hover:text-custom-orange-hover hover:bg-amber-200 transition duration-300">
                        Service
                    </NavLink>
                    <NavLink to="/" className="text-[13px] text-gray-500 rounded-full font-montserrat-medium px-6 py-1 mx-2 my-1 hover:text-custom-orange-hover hover:bg-amber-200 transition duration-300">
                        Pricing
                    </NavLink>
                </div>
            </div>

            <div className="flex px-10 mt-16 border grow">
                <div>
                    <p className="font-montserrat-semi text-[60px] leading-tight text-gray-700">
                        <span className="text-custom-orange">Sorry!, </span>this <br /> page isn't <br /> available
                    </p>
                    <p className="font-montserrat-regular text-gray-600 text-[20px]">
                        The page you were looking for couldn't be found
                    </p>
                    <p className="font-montserrat-medium text-gray-400 mt-14">
                        Go back to the <NavLink to="/" className="text-custom-orange hover:text-custom-orange-hover transition duration-300">homepage</NavLink> or visit our <NavLink to="/" className="text-custom-orange hover:text-custom-orange-hover transition duration-300">Help Center</NavLink>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;