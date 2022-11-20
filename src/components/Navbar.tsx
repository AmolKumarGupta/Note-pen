import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, FormEvent, useMemo, useEffect } from "react";
import { addBook } from "../app/features/bookShelfSlice";
import { change, create } from "../app/features/bookSlice";
import { changeCurrentBook } from "../app/features/currentBookSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";

export default function Navbar(){
    const LABEL = 'New';
    const [state, setState] = useState(false);
    const [isSaveBtnHidden, setIsSaveBtnHidden] = useState(true);
    const createBtnRef = useRef<HTMLDivElement>(null);
    const [bookShelf, currentBook]: [BookShelf, string] = useAppSelector(s => [s.bookShelf, s.currentBook]);
    const dispatch = useAppDispatch();

    useEffect( () => {
        document.querySelectorAll(`.bookshelf`).forEach( (book) => {
            if(book.textContent===currentBook) {
                book.classList.add('nav_active');
            }
        });

        return () => {
            document.querySelectorAll(`.bookshelf`).forEach( (book) => {
                book.classList.remove('nav_active');
            });
        }
    }, [currentBook]);

    const bookListItem = useMemo( () => {
        const activeBook = (ele: HTMLLIElement) => {
            if( ele.textContent!==null ){
                dispatch(changeCurrentBook(ele.textContent));
                dispatch(change(ele.textContent));
            }
        }
        return bookShelf.map( book => <li key={book} onClick={ (e)=>activeBook(e.target as HTMLLIElement)} className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer capitalize bookshelf">
            {book}
            <FontAwesomeIcon icon={faEllipsisV} 
            pull="right" 
            className="leading-[100%] py-1" 
            onClick={ e=> { 
                console.log(e);
                e.stopPropagation();
            } }
            />
        </li> );
    }, [bookShelf, dispatch]);

    const handleToggle = ()=> setState( (prev: boolean )=> !prev );

    const changeNewText = (e: FormEvent<HTMLDivElement>)=>{
        let text: string|undefined|null = createBtnRef.current?.textContent;
        (LABEL === text || text==="") ? setIsSaveBtnHidden(true) : setIsSaveBtnHidden(false);
    }

    const HandleEnter = (e: any) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(createBtnRef.current !== null) {
                // createBtnRef.current.textContent = LABEL;
            }
        }
    }

    const resetDefault = (e: FormEvent) => {
        if(createBtnRef.current !== null) {
            if(createBtnRef.current.textContent===""){
                createBtnRef.current.textContent = LABEL;
            }
        }
    }

    const save = () => {
        let text: string|undefined|null = createBtnRef.current?.textContent;

        if( createBtnRef.current!==null ){
            createBtnRef.current.textContent = LABEL;
            createBtnRef.current.blur();
        }
        if( text!==undefined && text!==null && text!=="" && text.toLowerCase()!==LABEL.toLowerCase()) {
            // setBookShelf( prev => [...prev, text?.toLowerCase() as string] )
            const {payload} = dispatch(addBook(text.toLowerCase() as string));
            dispatch(create( payload ));
            dispatch(changeCurrentBook( payload ));
            setIsSaveBtnHidden(true)
        }
    }

    return (
        <>
        <nav className="bg-hard text-mixed border-[1px] border-hard rounded-sm lg:px-0 lg:fixed lg:h-full lg:w-[280px]">
            <h1 className="text-light text-lg font-bold py-3 px-2 lg:px-4 border-b-[1px] rounded-sm">
                Note-pen
                <span onClick={handleToggle} className="float-right lg:hidden">
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </h1>
            <ul className={`px-2 lg:px-0 overflow-hidden ${ state?'h-full':'h-0' } lg:h-full`}>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer flex">
                    <div ref={createBtnRef} className="w-full text-blue-200 focus-visible:outline-none focus-visible:border-none" contentEditable="true" suppressContentEditableWarning={true} onInput={ (e)=>{ changeNewText(e) } } onKeyPress={HandleEnter} onBlur={(e)=>{resetDefault(e)}}>
                        {LABEL}
                    </div>
                    <div onClick={save} className={`float-right text-xl ${ isSaveBtnHidden?"hidden":"" }`}>+</div>
                </li>
                { bookListItem }
            </ul>
        </nav>
        </>
    );
}