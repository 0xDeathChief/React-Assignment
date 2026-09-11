import { use } from "react";
import type { ContentType } from "../datatype/dataType";

interface ContentProps{
    data: Promise<ContentType[]>;
}



const Content = ( {data}: ContentProps) => {

    const contents: ContentType[] = use(data);

    return (
        <div>
           {console.log(contents)};
        </div>
    );
};

export default Content;