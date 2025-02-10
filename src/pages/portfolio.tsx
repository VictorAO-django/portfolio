import { useState } from "react";

function Portfolio(){
    type TestimonialType = {title: string; type: string, avatar: string, slug: string, tags: string[]}[]
    const [projects, setProjects] = useState<TestimonialType>([])

    setProjects(
        [
            {
                title: "Babyducts",
                type: "Ecommerce Website",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "babyducts-ecommerce-website",
                tags: ['Fin Tech', 'Ecommerce']
            },
            {
                title: "Naliss Tasued",
                type: "Voting Platform",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "naliss-tasued-website",
                tags: ['Voting', 'School']
            },
            {
                title: "Tradewize",
                type: "IBKR Trading",
                avatar: "https://res.cloudinary.com/dpbxwwfym/image/upload/v1733944453/babyduct_logo_uztd6c.png",
                slug: "tradewize-trading-website",
                tags: ['Trading', 'Brokers',]
            },
        ]
    )
    return(
        <div className="w-full mt-16 flex flex-col items-start pb-16">
            <div className="flex flex-col items-start">
                <p className="font-inter-semi m-0 text-[25px] text-gray-700">
                    Take a look at my work
                </p>
                <p className="font-inter-regular m-0 text-[18 px] text-gray-700 mt-1">
                    Here are some of the projects I've worked on.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 w-full">

                {projects.map((item, _) => (
                    <div 
                    className="border border-gray-300 rounded-xl py-4 px-10"
                    key={_}
                    >   
                        <div className="flex flex-row items-center w-full">
                            <div className="w-40 h-40 overflow-hidden border rounded-3xl">
                                <img src={item.avatar} alt="" />
                            </div>
                            <div className="ml-3">
                                <p className="font-inter-semi text-start text-gray-700 text-[28px]">
                                    {item.title}
                                </p>
                                <p className="font-inter-medium text-start text-gray-500 text-[17px]">
                                    {item.type}
                                </p>
                                <div className="flex flex-row space-x-2 flex-wrap mt-5">
                                    {item.tags.map((sub_item, _) => (
                                        <p key={_} className="rounded-lg bg-gray-200 py-1 px-2 text-gray-700 font-montserrat-regular text-[14px]">
                                            {sub_item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mx-auto">
                                <a href={`/portfolio/${item.slug}`}
                                className="text-blue-800 text-[15px] font-inter-semi bg-gray-200 rounded-2xl py-2 px-4 hover:bg-gray-300"
                                >
                                    show
                                </a>
                            </div>
                        </div>
                        
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Portfolio;
