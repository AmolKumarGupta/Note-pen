import Book from "../components/Book";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <div className="" id="wrapper" >
            <Navbar/>
            <div className="lg:ml-[280px] parent">
                <Book />
            </div>
        </div>
    );
}