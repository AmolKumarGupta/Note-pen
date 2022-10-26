import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../app/features/bookSlice";

export default function Book(){
    // @ts-ignore
    const text: string = useSelector(s => s.book.text);
    const dispatch = useDispatch();
    const textRef = useRef<HTMLDivElement>(null);

    useEffect( ()=>{
        if(textRef.current){
            textRef.current.innerText = text;
        }
    }, [text]);

    return (
        <>
        <div> <button onClick={()=>dispatch(add(textRef.current?.innerText))} >Save</button></div>
        <div ref={textRef} contentEditable="true" className="lg:fixed lg:w-full lg:h-full"></div>
        </>
    );
}