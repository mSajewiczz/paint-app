import {useState} from "react";

export default function MainBoard(){


    const [position, setPosition] = useState({Y: 0, X: 0});

    const handleDraw = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({Y: e.clientY, X: e.clientX})

        console.log(`X: ${position.X}, Y: ${position.Y}`);

        return (
            <div className={`absolute translate-y-${position.Y} translate-x-${position.X} w-px h-px bg-black`}></div>
        );
    }


    return (

        <div className="flex justify-center items-center z-10 w-screen h-screen bg-black">

        <div className="px-2 bg-red-200 w-full h-150" onMouseMoveCapture={handleDraw}>


        </div>

        </div>

    );
}