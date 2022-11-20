import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useRef } from "react";
import { add } from "../app/features/bookSlice";
import { useAppDispatch } from "../app/hook";
import getBookTitle from "../helpers/getBookTitle";

function useBookTitle(currentBook: string, datatitle: string|undefined) {
    const titleRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();

    const title: string = useMemo(
        ()=>{
            return getBookTitle(currentBook, datatitle);
        },
        [currentBook, datatitle]
    );

    const makeEditable =  ()=> { 
        if( titleRef.current ){
            titleRef.current.contentEditable="true";
            titleRef.current.focus();
        }
    } 

    const handleBlur = ()=> {
        if( titleRef.current ){
            titleRef.current.contentEditable="false";
        }
    }

    const HandleEnter = (e: any) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if( titleRef.current!=null ){
                titleRef.current.textContent!=="" && dispatch(add([currentBook, {title: titleRef.current.textContent as string}]));
            }
        }
    }

    return (
        <>
        <div className="flex-1 flex">
            <div 
            ref={titleRef} 
            contentEditable={false} 
            suppressContentEditableWarning={true} 
            onClick={makeEditable} 
            onBlur={handleBlur} 
            onKeyPress={HandleEnter} 
            className="font-bold text-2xl py-2 pl-4 m-1 rounded capitalize focus-visible:outline-none focus-visible:border-none">
                { title }
            </div>
            <FontAwesomeIcon icon={faPencil} size="xs" className="cursor-pointer ml-1 self-center" onClick={makeEditable} />
        </div>
        </>
    );
}

export default useBookTitle;