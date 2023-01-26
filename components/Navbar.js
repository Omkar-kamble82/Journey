"use client"
import { useState,useEffect } from "react";
import { navVariants } from "./motion";
import { motion } from "framer-motion";

export default function Navbar(){

    const [menu, setMenu] = useState(true);
    const [scroll,setScroll] = useState(false);

    const transition = () => {
        if(window.scrollY > 70) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
                setMenu(true)
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("scroll",handler);
        window.addEventListener("scroll", transition);
        return () => window.removeEventListener("scroll", transition);
    },[]);

    return (
        <motion.div 
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${scroll && `backdrop-blur-lg`} top-0 fixed overflow-hidden flex justify-between items-center px-6 py-4 w-[100%] bg-[transparent] z-20`}>
            <a href="#"><img className=" z-20 h-[60px]" src="/travel_icon.png" alt="icon"/></a>
            <div className="gap-8 uppercase	 z-20 hidden lg:flex md:items-center">
                <a href="#aboutus"><li className="text-xl text-[#40E0D0] font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">About Us</li></a>
                <a href="#packages"><li className="text-xl text-[#40E0D0] font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">Packages</li></a>
                <a href="#offer"><li className="text-xl text-[#40E0D0] font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">Services</li></a>
                <a href="#contactus"><button className="border-2 text-[#40E0D0] border-[#40E0D0] px-8 py-1 font-bold cursor-pointer hidden md:block hover:bg-[#40E0D0] hover:text-white hover:duration-700">CONTACT US</button></a>
            </div>

            <div className="flex items-center lg:hidden">
                <div onClick={() => {setMenu(!menu);setScroll(false)}} className="absolute right-0 bg-[#40E0D0] rounded-[50%] p-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7 text-white"><path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path></svg>
                </div>
                <div className={`${menu ? `translate-x-[100%]` : `translate-x-0`} bg-[#F4F8EB] transition-all duration-1000 fixed w-[200px] h-screen top-0 right-0 bottom-0 lg:w-[300px]`}>
                    <div className={`h-[35px] w-[35px] p-2 rounded-[50%] border-[#40E0D0] border-[1px] absolute top-4 right-8 lg:h-[35px] lg:w-[35px]`} onClick={()=>{setMenu(true)}}><img src="/close.svg" alt="close-icon"/></div>
                        <div className={`absolute uppercase	 top-16 left-6`}>
                            <a href="#aboutus"><li className="text-4sm my-3 text-[#40E0D0] font-medium cursor-pointer hover:opacity-70 hover:duration-700">About Us</li></a>
                            <a href="#packages"><li className="text-4sm my-3 text-[#40E0D0] font-medium cursor-pointer hover:opacity-70 hover:duration-700">Packages</li></a>
                            <a href="#offer"><li className="text-4sm my-3 text-[#40E0D0] font-medium cursor-pointer hover:opacity-70 hover:duration-700">Services</li></a>
                            <a href="#contactus"><button className=" border-2 my-1 text-[#ffffff] bg-[#40E0D0] border-[#40E0D0] px-2 py-1 font-bold cursor-pointer hover:opacity-70 hover:text-white hover:duration-700">CONTACT US</button></a>
                        </div>
                </div>
            </div>
        </motion.div>
    )
};