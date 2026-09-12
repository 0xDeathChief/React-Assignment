import { use } from 'react';
import type { ContentType } from '../datatype/dataType';

const Content = ({ data }: { data: Promise<ContentType[]> }) => {
    const contents = use(data);

    return (
        <>
        <div className="container mx-auto grid grid-cols-2 cols-span-2 gap-5 mt-10">
            <div className=" grid grid-cols-3 cols-span-5 gap-5">
                {contents.map((content: ContentType) => (
                    <div key={content.name} className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10 flex justify-between items-center">
                            <img
                                src={content.icon}
                                alt={content.name}
                                className="rounded-xl flex w-7 h-7"
                            />
                            <div className="bg-lime-400 rounded-full w-25 h-3xl flex justify-center items-center">{content.category}</div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="font-bold flex items-start">{content.name}</h2>
                            <p>{content.description}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="">
                <h2 className="text-2xl font-bold text-center">Our Technologies</h2>
                <p className="text-center text-gray-600">Explore the technologies that power our solutions</p>
            </div>
        </div>
        </>
    );
};

export default Content;