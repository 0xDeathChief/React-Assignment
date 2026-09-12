import { use } from 'react';
import type { ContentType } from '../datatype/dataType';
import { IoIosStar } from "react-icons/io";

const Content = ({ data }: { data: Promise<ContentType[]> }) => {
    const contents = use(data);

    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-6xl font-bold leading-normal">Explore the <span className="text-[#DB2777]">Techonogies</span></h2>
                <p className="text-xl text-gray-600">Pick one technology per category to build your ideal stack</p>
            </div>

            <div className="container mx-auto pt-20 flex gap-20">
                <div className="grid grid-cols-3 gap-20">
                    {contents.map((content: ContentType) => (
                        <div key={content.name} className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10 flex justify-between items-center">
                                <img
                                    src={content.icon}
                                    alt={content.name}
                                    className="rounded-xl w-10 h-10"
                                />
                                <div className="rounded-full w-25 h-auto flex justify-center items-center" style={{ backgroundColor: content.color, color: 'white' }}>
                                    {content.badge}
                                </div>
                            </figure>

                            <h2 className="font-bold px-10 py-3 text-2xl">
                                {content.name}
                            </h2>

                            <p className="text-left px-10">
                                {content.description}
                            </p>

                            <div className="flex justify-between items-center px-10 py-10">
                                <h2 className="bg-[#F1F5F9] rounded-4 px-2">{content.category}</h2>
                                <h2>{content.difficulty}</h2>
                                <h2 className="flex items-center gap-2"><IoIosStar className="text-yellow-400" />{content.rating}</h2>
                            </div>

                            <div className="px-10 pb-10">
                                <button className="btn w-full rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white border-none">
                                    Add to Stack
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border border-[#F1F5F9] card bg-base-100 w-96 shadow-sm h-70">
                    <h2 className="text-2xl font-bold px-20 pt-10">Your Stack</h2>
                    <p className=" text-gray-600 px-10">No technologies selected yet.</p>
                    <div className="flex justify-center items-center h-40 ">
                        <p className="border-2 border-dashed border-[#F1F5F9] rounded-5 px-20 py-10">Your Stack is empty</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;