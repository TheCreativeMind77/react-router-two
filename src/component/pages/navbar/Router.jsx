import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import About from "./About"
import Location from "./Location";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";



const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default Router