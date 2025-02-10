import { useState } from "react";
import { useParams } from 'react-router-dom';
import { BsGlobe } from "react-icons/bs";
import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiPython, SiPostgresql, SiDigitalocean, SiIcloud, } from 'react-icons/si';

type Tools = {
    image: any,
    name : string
};

type DetailProp = {
  image: any,
  name: string;
  tools:  Tools[]
};

interface IconProps {
    icon: React.ElementType;  // This allows passing the icon component dynamically
    size?: number;            // Optional size for the icon
    color?: string;           // Optional color for the icon
  }
  
  const DynamicIcon: React.FC<IconProps> = ({ icon: Icon, size = 50, color = 'black' }) => {
    return <Icon size={size} color={color} />;
  };

const TechnicalDetail: React.FC<DetailProp> = ({ image, name, tools }) => {
  return (
    <div
      className="bg-gray-100 rounded-xl py-5 px-8 flex flex-col items-center"
    >
        <DynamicIcon icon={image} size={50} color="blue" />
        <p className="text-gray-700 font-montserrat-medium text-[22px] mt-5">
            {name}
        </p>
        <div className="grid grid-cols-2 gap-5 mt-5 w-full">
            {tools.map((sub_item, _) => (
                <div className="flex items-center space-x-2">
                    <DynamicIcon icon={sub_item.image} size={15} color="#374151" />
                    {/* <FontAwesomeIcon icon={faAndroid} style={{ color: 'green', fontSize: '50px' }} /> */}
                    <p className="text-[14px] font-montserrat-regular">{sub_item.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
};


const Project: React.FC = () => {
    // Using `useParams` without explicit typing, or using `Record<string, string | undefined>`
    const params = useParams<Record<string, string | undefined>>();

    // Now, use `params.subPath` to access the subPath
    const slug = params.project;

    type TestimonialType = {title: string; type: string, avatar: string, slug: string, overview: string, role: string, features: string[], responsibilities: string[], tags: string[], technical_details: DetailProp[]}[]
    const [projects] = useState<TestimonialType>(
        [
            {
                title: "Babyducts",
                type: "Ecommerce Website",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "babyducts-ecommerce-website",
                tags: ['Fin Tech', 'Ecommerce'],
                overview: `The Oogie Games app is a fun an engaging way to increase foot traffic and sales to the local retails stores. To accomplish the best user experience complex integrations were used to “plug” a custom game into a business application. Our client was a localized video game retailer that had a very unique style and commitment to the community they are in. They strive to bring not only nostalgia back by refurbishing old video games but to also host video game experiences to the local community. This was a client of my startup company (Mogabi) that built white labeled mobile video games for businesses.`,
                features: ['Coupon rewards/redeem system', 'Digital user wallet to store coupons', 'Custom branded mobile game plugin', 'Native mobile app for displaying store info and redeeming coupons', 'Easy to use Admin Portal', 'Push notification newsletter '],
                role: "I was the chief software architect for this project.",
                responsibilities: ['Architect, design and develop the software platform.', 'Create a new white label video game that can easily be rebranded.', 'Working with the client to integrate the app into their business.'],
                technical_details: [
                    {image: SiIcloud, name: 'Backend/Cloud', tools: [
                            {image: SiPython, name: 'Python'},
                            {image: SiDjango, name: 'Django'},
                            {image: SiDjango, name: 'Django Rest Framework'},
                            {image: SiPostgresql, name: 'PostgreSQL'},
                            {image: SiDigitalocean, name: 'Digital Ocean'},
                        ]
                    },
                    // {image: BsGlobe, name: 'Web', tools: [
                    //         {image: PiFileHtmlFill, name: 'HTML'},
                    //         {image: FaCss3, name: 'CSS'},
                    //         {image: IoLogoJavascript, name: 'Javascript'},
                    //         {image: RiReactjsLine, name: 'ReactJS'},
                    //         // {image: SiPython, name: 'Digital Ocean'},
                    //     ]
                    // },
                    // {image: FaMobileScreen, name: 'Mobile', tools: [
                    //         {image: SiPython, name: 'Python'},
                    //         {image: SiPython, name: 'Django'},
                    //         {image: SiPython, name: 'Django Rest Framework'},
                    //         {image: SiPython, name: 'PostgreSQL'},
                    //         {image: SiPython, name: 'Digital Ocean'},
                    //     ]
                    // }
                ]
            },
            {
                title: "Naliss Tasued",
                type: "Voting Platform",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "naliss-tasued-website",
                tags: ['Voting', 'School'],
                overview: "The Oogie Games app is a fun an engaging way to increase foot traffic and sales to the local retails stores. To accomplish the best user experience complex integrations were used to “plug” a custom game into a business application. Our client was a localized video game retailer that had a very unique style and commitment to the community they are in. They strive to bring not only nostalgia back by refurbishing old video games but to also host video game experiences to the local community. This was a client of my startup company (Mogabi) that built white labeled mobile video games for businesses.",
                features: ['Coupon rewards/redeem system', 'Digital user wallet to store coupons', 'Custom branded mobile game plugin', 'Native mobile app for displaying store info and redeeming coupons', 'Easy to use Admin Portal', 'Push notification newsletter '],
                role: "I was the chief software architect for this project.",
                responsibilities: ['Architect, design and develop the software platform.', 'Create a new white label video game that can easily be rebranded.', 'Working with the client to integrate the app into their business.'],
                technical_details: [
                    {image: SiIcloud, name: 'Backend/Cloud', tools: [
                            {image: SiPython, name: 'Python'},
                            {image: SiDjango, name: 'Django'},
                            {image: SiDjango, name: 'Django Rest Framework'},
                            {image: SiPostgresql, name: 'PostgreSQL'},
                            // {image: SiDigitalocean, name: 'Digital Ocean'},
                        ]
                    },
                    {image: BsGlobe, name: 'Web', tools: [
                            {image: PiFileHtmlFill, name: 'HTML'},
                            {image: FaCss3, name: 'CSS'},
                            {image: IoLogoJavascript, name: 'Javascript'},
                            {image: RiReactjsLine, name: 'ReactJS'},
                            // {image: SiPython, name: 'Digital Ocean'},
                        ]
                    },
                ]
            },
            {
                title: "Tradewize",
                type: "IBKR Trading",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "tradewize-trading-website",
                tags: ['Trading', 'Brokers',],
                overview: "The Oogie Games app is a fun an engaging way to increase foot traffic and sales to the local retails stores. To accomplish the best user experience complex integrations were used to “plug” a custom game into a business application. Our client was a localized video game retailer that had a very unique style and commitment to the community they are in. They strive to bring not only nostalgia back by refurbishing old video games but to also host video game experiences to the local community. This was a client of my startup company (Mogabi) that built white labeled mobile video games for businesses.",
                features: ['Coupon rewards/redeem system', 'Digital user wallet to store coupons', 'Custom branded mobile game plugin', 'Native mobile app for displaying store info and redeeming coupons', 'Easy to use Admin Portal', 'Push notification newsletter '],
                role: "I was the chief software architect for this project.",
                responsibilities: ['Architect, design and develop the software platform.', 'Create a new white label video game that can easily be rebranded.', 'Working with the client to integrate the app into their business.'],
                technical_details: [
                    {image: SiIcloud, name: 'Backend/Cloud', tools: [
                            {image: SiPython, name: 'React Native'},
                            {image: SiDjango, name: 'Django'},
                            {image: SiDjango, name: 'Django Rest Framework'},
                            {image: SiPostgresql, name: 'PostgreSQL'},
                            {image: SiDigitalocean, name: 'Digital Ocean'},
                        ]
                    },
                ]
            },
        ]
    )

    const PROJECT = projects.find(project => project.slug === slug);

    type HoverProp = {
        id: string,
        name: string;
    };
    const [hovered, setHovered] = useState<HoverProp>({
        id: '',
        name: ''
    })

    return(
        <div className="w-full mt-16 flex flex-col items-start pb-16">
            <div 
            className="rounded-xl py-4 px-10"
            >   
                <div className="flex flex-row items-start w-full">
                    <div className="w-44 h-44 overflow-hidden border rounded-3xl">
                        <img src={PROJECT?.avatar} alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="font-inter-semi text-start text-gray-800 text-[32px]">
                            {PROJECT?.title}
                        </p>
                        <p className="font-inter-medium text-start pt-0 text-gray-500 text-[17px]">
                            {PROJECT?.type}
                        </p>
                        <div className="flex flex-row space-x-2 flex-wrap mt-5">
                            {PROJECT?.tags.map((sub_item, _) => (
                                <p key={_} className="rounded-lg bg-gray-200 py-1 px-2 text-gray-700 font-montserrat-regular text-[12px]">
                                    {sub_item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="py-8 mt-8 border-t border-gray-200">
                    <p className="font-inter-medium text-start pt-0 text-gray-900 text-[28px]">
                        Overview
                    </p>
                    <p className="font-inter-regular pt-3 text-start text-gray-600 text-[17px]">
                    {PROJECT?.overview}
                    </p>
                </div>


                <div className="py-8 mt-8 border-t border-gray-200">
                    <p className="font-inter-medium text-start pt-0 text-gray-900 text-[28px]">
                        Key Features
                    </p>
                    <ul className="flex flex-col items-start space-y-2 list-disc ml-10 mt-5">
                        {PROJECT?.features.map((sub_item, _) => (
                            <li key={_} className="font-montserrat-regular text-[15px] text-gray-600">
                                {sub_item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="py-8 mt-8 border-t border-gray-200">
                    <p className="font-inter-medium text-start pt-0 text-gray-900 text-[28px]">
                        My Role
                    </p>
                    <p className="font-inter-regular pt-3 text-start text-gray-600 text-[17px]">
                        {PROJECT?.role} With that my responsibilities included: 
                    </p>
                    <ul className="flex flex-col items-start space-y-2 list-disc ml-10 mt-5">
                        {PROJECT?.responsibilities.map((sub_item, _) => (
                            <li key={_} className="font-montserrat-regular text-[15px] text-gray-600">
                                {sub_item}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="py-8 mt-8 border-t border-gray-200">
                    <p className="font-inter-medium text-start pt-0 text-gray-900 text-[28px]">
                        Technical Details
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-5">
                        {PROJECT?.technical_details.map((sub_item, _) => (
                            <TechnicalDetail  image={sub_item.image} name={sub_item.name} tools={sub_item.tools} />
                        ))}
                    </div>
                </div>

                <div className="py-8 mt-14 border-t border-gray-200">
                    <p className="font-inter-medium text-start pt-0 text-gray-900 text-[28px]">
                        See Other Projects
                    </p>
                    <div className="flex flex-row space-x-3 justify-start mt-10">
                        {projects.map((item, _) => (
                            <a 
                            href={`/portfolio/${item.slug}`} 
                            key={_} 
                            onMouseOver={()=>{setHovered({id: item.slug, name: item.title})}}  
                            onMouseOut={()=>{setHovered({id: '', name: ''})}}
                            className="relative flex flex-row items-center overflow-hidden w-40 h-40 rounded-3xl">
                                {/* {(hovered.id == item.slug) && ( */}
                                    <div
                                    className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-600 transition-all duration-500 ease-in-out transform flex items-center justify-around ${
                                        (hovered.id == item.slug) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}
                                    >
                                        <span
                                        className="text-white font-montserrat-Regular text-[17px]"
                                        >
                                        {item.title}
                                    </span>
                                    </div>
                                {/* )} */}
                                <div className="w-40 h-40 overflow-hidden border">
                                    <img src={item.avatar} alt="" />
                                </div>  
                            </a>
                        ))}
                    </div>
                </div>
                
                        
            </div>
        </div>
    );
};

export default Project;
