import React from "react";
import { BeatLoader } from "react-spinners";

function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 bg-opacity-50">
            <BeatLoader color="#36d7b7" />
        </div>
    );
}

export default Loading;