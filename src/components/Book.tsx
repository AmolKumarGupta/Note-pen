import { useMemo, useRef } from "react";
import { add } from "../app/features/bookSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";
import useBookTitle from "../hooks/useBookTitle";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../quill.css';

export default function Book(){
    // @ts-ignore
    const [book, currentBook]: [Book, string] = useAppSelector(s => [s.book, s.currentBook]);
    const dispatch = useAppDispatch();
    const textRef = useRef<ReactQuill>(null);
    const Title = useBookTitle(currentBook, book?.title);

    const text = useMemo(
        () => {
            if(book){
                if( book.data!==undefined ){
                    return book.data;
                }
            }
            return '';
        },
        [book]
    );

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
            <button onClick={()=>dispatch(add([currentBook, {...book, data: textRef.current?.value as string}]))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded self-start" >Save</button>
        </div>
        { underline }

        <ReactQuill 
        ref={textRef}
        className="absolute lg:[position:unset] w-full h-full" 
        value={text} 
        />
        </>
    );
}