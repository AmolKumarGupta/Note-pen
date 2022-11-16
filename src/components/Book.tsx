import { useEffect, useRef } from "react";
import { add } from "../app/features/bookSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";

export default function Book(){
    // @ts-ignore
    const [books, currentBook]: [Books, string] = useAppSelector(s => [s.book, s.currentBook]);
    const dispatch = useAppDispatch();
    const textRef = useRef<HTMLDivElement>(null);

    useEffect( ()=>{
        let temp = textRef.current;

        if(textRef.current){
            if(books[currentBook]){
                textRef.current.innerText = books[currentBook].data;
            }
        }

        return () => {
            if(temp){
                temp.innerText = '';
            }
        }
    }, [books, currentBook]);

    return (
        <>
        <div className="text-right">
            <button onClick={()=>dispatch(add({ name: currentBook, book: { ...books.currentBook, data: textRef.current?.innerText } }))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded " >Save</button>
        </div>
        <div ref={textRef} contentEditable="true" className="absolute lg:fixed w-full lg:w-[calc(100%-280px)] h-full p-2 border-none focus-visible:outline-none"></div>
        </>
    );
}