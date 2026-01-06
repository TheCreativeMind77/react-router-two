import { Link } from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
 
  const[isOpen,setIsOpen]=useState(false);

  
  const collapseOpen=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-black text-white py-4 sticky top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold hover:text-gray-300">logo</h1>

          {/*collapse bar icon */}

          <div onClick={collapseOpen} className="block md:hidden">
            {isOpen?<IoCloseSharp />: <FiAlignJustify />}  
          </div>
          {/*collapse bar icon */}
          <ul className="hidden md:flex  gap-4">
            <li className=" hover:text-amber-500"><Link to ={"/"}>Home</Link></li>
            <li className=" hover:text-amber-500"><Link to={"/contact"}>Contact</Link></li>
            <li className=" hover:text-amber-500"><Link to={"/product"}>Product</Link></li>
            <li className=" hover:text-amber-500"><Link to={"/location"}>Location</Link></li>
            <li className=" hover:text-amber-500"><Link to={"/about"}>About Us</Link></li>
          </ul>
          <button className="hidden md:block bg-white text-black font-bold hover:bg-gray-300 hover:text-green-500 rounded py-2 px-4 ">Login</button>

          {/* Mobile responsive */}

          <div className={`flex flex-col md:hidden absolute top-full left-0 bg-gray-500 w-full justify-center items-center ${isOpen? "block":"hidden"}`}>
            <ul className="gap-4">
              <li className="py-1 hover:text-amber-500"><Link to ={"/"}>Home</Link></li>
              <li className="py-1 hover:text-amber-500"><Link to={"/contact"}>Contact</Link></li>
              <li className="py-1 hover:text-amber-500"><Link to={"/product"}>Product</Link></li>
              <li className="py-1 hover:text-amber-500"><Link to={"/location"}>Location</Link></li>
              <li className="py-1 hover:text-amber-500"><Link to={"/about"}>About Us</Link></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar