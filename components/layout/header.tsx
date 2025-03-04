"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
    subsets: ["latin"],
})

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full flex justify-between items-center py-8 md:px-20 px-4 bg-white shadow-gray z-50"
        >
        <div className="flex justify-between w-full items-center space-x-5">
            <h1 className={`${anton.className} text-3xl`} >MyImageProc</h1>
            <ul className="hidden md:flex space-x-5">
                <li className="nav-pill"><Link href="">Compress Image</Link></li>
                <li className="nav-pill"><Link href="">Remove Background</Link></li>
                <li className="nav-pill"><Link href="">Convert Image Format</Link></li>
            </ul>
            {!isMenuOpen && <MenuIcon className="md:hidden" onClick={toggleMenu}/> }
        </div>
        <AnimatePresence>
        {
            isMenuOpen && (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 w-full h-screen bg-black bg-opacity-50 z-50 grid place-content-center">
                <ul className="flex flex-col items-center space-y-5 text-black p-10 bg-white shadow-lg rounded-md">
                    <li className="text-black hover:scale-105"><Link href="">Compress Image</Link></li>
                    <li className="text-black hover:scale-105"><Link href="">Remove Background</Link></li>
                    <li className="text-black hover:scale-105"><Link href="">Convert Image Format</Link></li>
                </ul>
                <XCircleIcon color="white" size={30} className="absolute top-4 right-4" onClick={toggleMenu}/>
                </motion.div>
            )
        }
        </AnimatePresence>
        </motion.div>
    )
}


export default Header;