import React, { use } from 'react';
import type { ContentType } from '../datatype/dataType';

const Content = ({ data }: { data: Promise<ContentType[]> }) => {
    const contents = use(data);
    return (
        <div className="container mx-auto grid grid-cols-3">
            {
                contents.map((content: ContentType) => (
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10 flex justify-between items-center">
                            <img
                                src={content.icon}
                                alt="Shoes"
                                className="rounded-xl flex w-[28px] h-[28px]" />
                            <div className="">{content.category}</div>
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
    );
};

export default Content;