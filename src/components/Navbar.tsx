import { useState } from "react";

export default function Navbar(){
    const [state, setState] = useState(false);

    const handleToggle = ()=>{
        setState(!state);
        console.log(state)
    }
    return (
        <>
        <nav className="bg-hard text-mixed border-[1px] border-hard rounded-sm lg:px-0 lg:fixed lg:h-full lg:w-[280px]">
            <h1 className="text-light text-lg font-bold py-3 px-2 lg:px-4 border-b-[1px] rounded-sm">Note pen <span onClick={handleToggle} className="float-right lg:hidden">0</span></h1>
            <ul className={`px-2 lg:px-0 h-0 overflow-hidden ${ state?'h-full':'' } lg:h-full`}>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer ">Scrapper</li>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer nav_active">Test</li>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer">qweuowqeuoieu wqeoui</li>
            </ul>
        </nav>
        </>
    );
}