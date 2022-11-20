import { useEffect, useMemo, useRef } from "react";
import { add } from "../app/features/bookSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";
import useBookTitle from "../hooks/useBookTitle";

export default function Book(){
    // @ts-ignore
    const [book, currentBook]: [Book, string] = useAppSelector(s => [s.book, s.currentBook]);
    const dispatch = useAppDispatch();
    const textRef = useRef<HTMLDivElement>(null);
    const Title = useBookTitle(currentBook, book?.title);

    useEffect( ()=>{
        let temp = textRef.current;

        if(temp){
            if(book){
                if( book.data !== undefined ){
                    temp.innerText = book.data;
                }
            }
        }

        return () => {
            if(temp){
                temp.innerText = '';
            }
        }
    }, [book, currentBook]);

    const underline = useMemo(
        ()=>{
            if( book ){
                return book.created_at && <div className="pt-2 pb-1 px-2  text-sm">Created: { book.created_at }</div> 
            }
            return '';
        },
        [book]
    );

    return (
        <>
        <div className="flex">
            { Title }
            <button onClick={()=>dispatch(add([currentBook, {...book, data: textRef.current?.innerText as string}]))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded self-start" >Save</button>
        </div>
        { underline }
        <div ref={textRef} contentEditable="true" className="absolute lg:fixed w-full lg:w-[calc(100%-280px)] h-full p-2 border-none focus-visible:outline-none"></div>
        </>
    );
}