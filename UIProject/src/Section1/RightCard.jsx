import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
        <div className="h-full overflow-hidden relative w-80 p-5 rounded-3xl">
            <img className="h-full w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card"
            />
            <RightCardContent />
        </div>

        <div className="h-full overflow-hidden relative w-80 p-5 rounded-3xl">
            <img className="h-full w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card"
            />
            <RightCardContent />
        </div>

        <div className="h-full overflow-hidden relative w-80 p-5 rounded-3xl">
            <img className="h-full w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1769839271768-aee5469799ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card"
            />
            <RightCardContent />
        </div>
    </div>
  );
};

export default RightCard;