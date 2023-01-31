import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Careers from "./Components/Pages/Careers/Careers";
import Home from "./Components/Pages/Home/home";
import Work from "./Components/Pages/Work/Work";
import Culture from "./Components/Pages/Culture/Culture"
import Contact from "./Components/Pages/Contact/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/culture" element={<Culture />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
