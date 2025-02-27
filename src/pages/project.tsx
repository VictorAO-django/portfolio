import { useState } from "react";
import { useParams } from 'react-router-dom';
import { BsGlobe } from "react-icons/bs";
import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsLine, RiPhpLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandLaravel } from "react-icons/tb";
import { SiDjango, SiPython, SiPostgresql, SiDigitalocean, SiIcloud, } from 'react-icons/si';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    type TestimonialType = {title: string; type: string, avatar: string, slug: string, overview: string, role: string, features: string[], screenshots: string[], responsibilities: string[], tags: string[], technical_details: DetailProp[]}[]
    const [projects] = useState<TestimonialType>(
        [
            {
                title: "Babyducts",
                type: "Ecommerce Website",
                avatar: "https://res.cloudinary.com/dlzg7ubrs/image/upload/v1740565626/Babyduct_logo_xymmwo.jpg",
                slug: "babyducts-ecommerce-website",
                tags: [
                    'Fin Tech', 
                    'Ecommerce'
                ],
                overview: `Babyducts is an e-commerce marketplace designed to seamlessly connect mothers with trusted sellers of baby products. With the goal of providing a curated, easy-to-navigate shopping experience, Babyducts empowers mothers to discover high-quality, reliable baby products while giving sellers a platform to reach their target audience with ease.
                    To create the best user experience, Babyducts integrates robust backend systems, smooth payment gateways, and efficient logistics solutions. Sellers can easily register, list products, and manage their inventory, while buyers can browse a variety of baby essentials, make secure purchases, and track their orders through an intuitive interface.
                    The platform stands out for its focus on trust, security, and convenience, ensuring that both buyers and sellers can interact with confidence. Whether it's baby clothes, toys, health products, or other necessities, Babyducts simplifies the shopping journey, making it a go-to destination for parents and caregivers.
                    Babyducts serves a growing community of parents who value quality and convenience, while also providing sellers with an opportunity to grow their businesses within a trusted marketplace. This platform is built with scalability in mind to accommodate future growth and provide continuous improvements for both buyers and sellers.`,
                features: [
                    'User-Focused Design', 'Seller-Centric Tools', 'Efficient Logistics', 'Security & Trust', 'Easy to use Admin Portal', 'Scalable & Reliable Backend'],
                role: "I was the python software engineer for this project.",
                responsibilities: [
                    'Successfully designed and implemented the backend system for user authentication, product management, and order tracking, contributing to a seamless user experience for both buyers and sellers.', 
                    'Designed the relational database schema for the platform using PostgreSQL (or any other DB) to store user data, product listings, orders, and payment details.', 
                    'Implemented efficient database queries to support large-scale operations, ensuring optimal performance even with a growing number of users and products.',
                    'Integrated secure and reliable payment gateways, enabling smooth transactions and order management.',
                    "Ensured the platform's backend could scale with increasing traffic, optimizing performance to handle high user engagement.",
                    'Played a pivotal role in ensuring the security of sensitive data and maintaining privacy for users and their transactions.'
                ],
                screenshots: [
                    "/Buyer 1.jpg",
                    "/Buyer 2.jpg",
                    "/Seller 1.jpg",
                    "/Seller 2.jpg",
                    "/Seller 3.jpg",
                ],
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
                avatar: "https://res.cloudinary.com/dlzg7ubrs/image/upload/v1740565301/Naliss_Logo_ygf7tw.jpg",
                slug: "naliss-tasued-website",
                tags: ['Voting', 'School'],
                overview: `Naliss TASUED is a secure and scalable voting platform developed for Tai Solarin University of Education (TASUED) to streamline and digitize their student elections. 
                    The platform allows students and faculty to easily participate in elections for various student union representatives while ensuring transparency, data integrity, and a seamless user experience. 
                    By digitizing the voting process, Naliss TASUED aims to provide a fair and efficient voting experience, allowing real-time updates and ensuring the election process complies with the university’s standards.`,
                features: [
                    'Secure User Authentication', 
                    'Election Management', 
                    'Real-Time Voting and Results', 
                    'Candidate and Voter Management', 
                    'Voting Process', 
                    'Performance & Scalability'
                ],
                role: "I was the one of the software architect for this project.",
                responsibilities: ['Architect, design and develop the software platform.', 'Create a new white label video game that can easily be rebranded.', 'Working with the client to integrate the app into their business.'],
                screenshots: [
                    "/Naliss 1.jpg",
                    "/Naliss 2.jpg",
                    "/Naliss 3.jpg",
                ],
                technical_details: [
                    {image: SiIcloud, name: 'Backend/Cloud', tools: [
                            {image: RiPhpLine, name: 'Php'},
                            {image: TbBrandLaravel, name: 'Laravel'},
                            {image: SiPostgresql, name: 'PostgreSQL'},
                            {image: SiDigitalocean, name: 'Digital Ocean'},
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
            // {
            //     title: "Tradewize",
            //     type: "IBKR Trading",
            //     avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
            //     slug: "tradewize-trading-website",
            //     tags: ['Trading', 'Brokers',],
            //     overview: "The Oogie Games app is a fun an engaging way to increase foot traffic and sales to the local retails stores. To accomplish the best user experience complex integrations were used to “plug” a custom game into a business application. Our client was a localized video game retailer that had a very unique style and commitment to the community they are in. They strive to bring not only nostalgia back by refurbishing old video games but to also host video game experiences to the local community. This was a client of my startup company (Mogabi) that built white labeled mobile video games for businesses.",
            //     features: ['Coupon rewards/redeem system', 'Digital user wallet to store coupons', 'Custom branded mobile game plugin', 'Native mobile app for displaying store info and redeeming coupons', 'Easy to use Admin Portal', 'Push notification newsletter '],
            //     role: "I was the chief software architect for this project.",
            //     responsibilities: ['Architect, design and develop the software platform.', 'Create a new white label video game that can easily be rebranded.', 'Working with the client to integrate the app into their business.'],
            //     technical_details: [
            //         {image: SiIcloud, name: 'Backend/Cloud', tools: [
            //                 {image: SiPython, name: 'React Native'},
            //                 {image: SiDjango, name: 'Django'},
            //                 {image: SiDjango, name: 'Django Rest Framework'},
            //                 {image: SiPostgresql, name: 'PostgreSQL'},
            //                 {image: SiDigitalocean, name: 'Digital Ocean'},
            //             ]
            //         },
            //     ]
            // },
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

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (PROJECT?.screenshots?.length || 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (PROJECT?.screenshots?.length || 1)) % (PROJECT?.screenshots?.length || 1));
    };

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
                        Screenshots
                    </p>
                    <div className="relative w-full max-w-5xl mx-auto">
                        {/* Image Slider */}
                        <div className="overflow-hidden relative h-[500px]">
                            <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 100 }}
                            >
                                {PROJECT?.screenshots.map((img, index) => (
                                    <img key={index} src={img} className="w-full h-[500px] object-cover flex-shrink-0" />
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-3">
                            {PROJECT?.screenshots.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 mx-1 rounded-full ${
                                    currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                                    }`}
                                />
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
                            <li key={_} className="font-montserrat-regular text-start text-[15px] text-gray-600">
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
                            className="relative flex flex-row items-center overflow-hidden border w-40 h-40 rounded-3xl">
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
                                <div className="w-40 h-40 overflow-hidden">
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
