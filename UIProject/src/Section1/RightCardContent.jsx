import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-amber-400/15 p-10 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 font-bold flex justify-center items-center">1</h2>
        <div className="flex flex-col items-center">
            <p className="text-white text-lg leading-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut enim eaque iste consequatur esse!</p>
            <div className="flex mt-5 gap-20 justify-between">
                <button className="bg-white px-4 py-2 rounded-full text-sm font-medium">
                    Satisfied
                </button>
                <button className="bg-white p-2 rounded-full">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </div>
    );
};

export default RightCardContent;