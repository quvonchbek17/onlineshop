import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import SinglePhone  from "./Pages/SinglePhone/SinglePhone";
import SingleNotebook from "./Pages/SingleNotebook/SingleNotebook";
import SingleAccessorie from "./Pages/SingleAccessorie/SingleAccessorie";
import Korzinka from "./Pages/Korzinka/Korzinka";
import Ordering from "./Pages/Ordering/Ordering";
import Selected from "./Pages/Selected/Selected";
import Footer from "./Components/Footer/Footer";
import ServiceRequirements from "./Pages/ServiceRequirements/ServiceRequirements";
import Contact from "./Pages/Contacts/Contact";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/phone" element={<SinglePhone/>} />
        <Route path="/notebook" element={<SingleNotebook/>} />
        <Route path="/accessorie" element={<SingleAccessorie/>} />
        <Route path="/korzinka" element={<Korzinka/>}/>
        <Route path="/ordering" element={<Ordering/>}/>
        <Route path="/selected" element={<Selected/>} />
        <Route path="/service" element={<ServiceRequirements/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Admin/>} />
      </Routes>
     <Footer/>
    </>
  );
}

export default App;
