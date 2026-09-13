import { use } from 'react';
import type { ContentType } from '../datatype/dataType';
import { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContentProps {
    data: Promise<ContentType[]>;
}

const Content = ({ data }: ContentProps) => {
    const contents = use(data);

    const [stack, setStack] = useState<ContentType[]>([]);

    const isSelected = (content: ContentType) => {
        return stack.some((item) => item.name === content.name);
    };

    const addToStack = (content: ContentType) => {
        if (isSelected(content)) return;
        setStack([...stack, content]);
        toast.success("added to your stack");
    };



    return (
        <>
            <ToastContainer position="bottom-right" autoClose={2000} theme="light" />

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
                                {isSelected(content) ? (
                                    <button className="btn w-full rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white border-none">
                                        Remove
                                    </button>
                                ) : (
                                    <button className="btn w-full rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white border-none" onClick={() => addToStack(content)}>
                                        Add to Stack
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border border-[#F1F5F9] card bg-base-100 w-96 shadow-sm h-fit sticky top-10">
                    <h2 className="text-2xl font-bold px-10 pt-10 text-center">Your Stack</h2>

                    <p className="text-gray-600 px-10 text-center pb-5">
                        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} ${stack.length === 1 ? 'technology' : 'technologies'} selected`}
                    </p>

                    {stack.length === 0 ? (
                        <div className="flex justify-center items-center pb-10">
                            <p className="border-2 border-dashed border-[#F1F5F9] rounded-lg px-10 py-10 text-center text-sm text-gray-400">
                                Your Stack is empty
                            </p>
                        </div>
                    ) : (
                        <div className="px-5 pb-5">
                            <div className="flex flex-col gap-1 max-h-80 overflow-y-auto pr-1">
                                {stack.map((content: ContentType) => (
                                    <div key={content.name} className="flex items-center gap-4 py-3 border-b border-[#F1F5F9] last:border-none">
                                        <img
                                            src={content.icon}
                                            alt={content.name}
                                            className="w-8 h-8 rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">
                                                {content.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {content.category}
                                            </p>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Content;