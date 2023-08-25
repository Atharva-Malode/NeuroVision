import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      {/* <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
      <Footer /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;