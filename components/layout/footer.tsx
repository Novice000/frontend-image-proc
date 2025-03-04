import React from "react";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "lucide-react";

function Footer(){
    return (
        <footer className="bg-black text-white px-20 py-5 flex flex-col gap-5">
                <div className="container flex flex-col md:flex-row justify-around items-center text-center gap-5 md:gap-20">
                    <p>MyImageProc</p>
                    <p>© 2025 MyImageProc. All Rights Reserved</p>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-5 md:gap-18">
                    <div className="flex gap-2 items-center"><GithubIcon/> github</div>
                    <div className="flex gap-2 item-center"><LinkedinIcon/>linkedin</div>
                    <div className="flex gap-2 items-center"><InstagramIcon/>instagram</div>
                </div>
        </footer>
    )
}

export default Footer