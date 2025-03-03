"use client";

import React, { useState } from "react";
import { MenuIcon, XCircleIcon } from "lucide-react";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
        <div className="flex justify-between items-center p-5">
            <h1>MyImageProc</h1>
            <ul>
                <li>Compress Image</li>
                <li>Remove Background</li>
                <li>Conver Image Format</li>
            </ul>
            <MenuIcon onClick={toggleMenu}/>
        </div>
        {
            isMenuOpen && (
                <div className="h-screen w-screen fixed inset-0 bg-black bg-opacity-50 z-40">
                <ul>
                    <li>Compress Image</li>
                    <li>Remove Background</li>
                    <li>Conver Image Format</li>
                </ul>
                <XCircleIcon className="absolute top-4 right-4" onClick={toggleMenu}/>
                </div>
            )
        }
        </div>
    )
}


export default Header;