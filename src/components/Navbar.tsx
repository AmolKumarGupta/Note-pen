
export default function Navbar(){
    return (
        <>
        <nav className="bg-hard text-mixed border-[1px] border-hard px-2 md:px-4 lg:px-0 lg:fixed lg:h-full lg:w-[280px]">
            <h1 className="text-light text-lg font-bold py-3 lg:px-4 lg:border-b-[1px]">Note pen</h1>
            <ul>
                <li className="lg:px-4 lg:py-2 nav_active">Scrapper</li>
                <li className="lg:px-4 lg:py-2">Test</li>
                <li className="lg:px-4 lg:py-2">qweuowqeuoieu wqeoui</li>
            </ul>
        </nav>
        </>
    );
}