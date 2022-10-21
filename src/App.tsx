import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="" id="wrapper" >
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
