import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

    // let btnName ="Login";
const [btnName,setBtnName] = useState("Login")

    return(
        <>
        <div className="bg-white hidden md:flex justify-between items-center px-8 py-2 shadow-lg border-b-2 border-sky-300 sticky top-0 z-40">
            <div className="logo-container">
                <img className=" w-20 h-20 rounded-full" src="https://images.pexels.com/photos/1336383/pexels-photo-1336383.jpeg" alt="" />
            </div>

            <div className="">
                <ul className=" flex gap-25 text-lg font-semibold cursor-pointer ">
                    <li className=" hover:scale-110 hover:text-sky-400 "  ><Link to="/">Home</Link></li>
                    <li className=" hover:scale-110 hover:text-sky-400"><Link to="/about">About Us</Link></li>
                    <li className="hover:scale-110 hover:text-sky-400"><Link to="/contact">Contact Us</Link></li>
                    <li className=" hover:scale-110 hover:text-sky-400"> <Link to="/cart">Cart</Link></li>
                    <button className="hover:scale-110 hover:text-sky-400" onClick={()=>{
                       btnName === "login" ? setBtnName("logout") : setBtnName("login")  
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
        </>
    )
}
export default Header