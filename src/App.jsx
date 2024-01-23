import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Latest from "./pages/Latest";

import './App.scss'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error/>} />\
      <Route path="/latest" element={<Latest />} />\
    </Routes>
    </>
  );
}

export default App;
