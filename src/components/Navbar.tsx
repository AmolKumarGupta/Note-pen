import { useState, useRef, FormEvent, useMemo } from "react";
import { addBook } from "../app/features/bookShelfSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";

export default function Navbar(){
    const LABEL = 'New';
    const [state, setState] = useState(false);
    const createBtnRef = useRef<HTMLDivElement>(null);
    const [isHidden, setIsHidden] = useState(true);
    // let [bookShelf, setBookShelf] = useState<BookShelf>([]);
    let bookShelf: BookShelf = useAppSelector(s => s.bookShelf);
    const dispatch = useAppDispatch();

    const bookListItem = useMemo( () => {
        return bookShelf.map( book => <li key={book} className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer">{book}</li> );
    }, [bookShelf]);

    const handleToggle = ()=> setState( (prev: boolean )=> !prev );

    const changeNewText = (e: FormEvent<HTMLDivElement>)=>{
        let text: string|undefined|null = createBtnRef.current?.textContent;
        (LABEL === text || text==="") ? setIsHidden(true) : setIsHidden(false);
    }

    const HandleEnter = (e: any) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            console.log(createBtnRef.current?.textContent);
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
            dispatch(addBook(text.toLowerCase() as string));
            setIsHidden(true)
        }
    }

    return (
        <>
        <nav className="bg-hard text-mixed border-[1px] border-hard rounded-sm lg:px-0 lg:fixed lg:h-full lg:w-[280px]">
            <h1 className="text-light text-lg font-bold py-3 px-2 lg:px-4 border-b-[1px] rounded-sm">Note-pen<span onClick={handleToggle} className="float-right lg:hidden">0</span></h1>
            <ul className={`px-2 lg:px-0 overflow-hidden ${ state?'h-full':'h-0' } lg:h-full`}>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer flex">
                    <div ref={createBtnRef} className="w-full text-blue-200 focus-visible:outline-none focus-visible:border-none" contentEditable="true" suppressContentEditableWarning={true} onInput={ (e)=>{ changeNewText(e) } } onKeyPress={HandleEnter} onBlur={(e)=>{resetDefault(e)}}>
                        {LABEL}
                    </div>
                    <div onClick={save} className={`float-right text-xl ${ isHidden?"hidden":"" }`}>+</div>
                </li>
                <li className="px-2 lg:px-4 py-2 hover:text-front hover:cursor-pointer nav_active">Example</li>
                { bookListItem }
            </ul>
        </nav>
        </>
    );
}