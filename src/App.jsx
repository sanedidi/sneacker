import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Latest from "./pages/Latest";

import './App.scss'
import SingleProduct from "./pages/SingleProduct";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error/>} />\
      <Route path="/latest" element={<Latest />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
    </Routes>
    </>
  );
}

export default App;
