import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Navbar } from "./components/header";
import Footer from "./components/footer";
import Doctors from "./Pages/Doctors/index";
import AboutUs from "./Pages/AboutUs/index";
import Home from "./Pages/Home";
import Predict from "./Pages/Home/predict";
function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route eaxct path="/about" element={<AboutUs/>}/>
        {/* <Route exact path="/" element={<Landing />} /> */}
        <Route exact path = "/Doctors" element = {<Doctors/>} />
        <Route exact path = "/home" element = {<Home/>} />
        <Route exact path = "/predict" element = {<Predict/>} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;