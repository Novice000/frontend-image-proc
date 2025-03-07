import React from "react";
import Link from "next/link";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "lucide-react";

function Footer(){
    return (
        <footer className="bg-black text-white px-20 py-5 flex flex-col gap-5 md:gap-10">
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-center gap-5 md:gap-20">
                    <p>MyImageProc</p>
                    <p>© 2025 MyImageProc. All Rights Reserved</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-18 w-full">
                    <Link href=""> <div className="flex gap-2 items-center"><GithubIcon/> github</div></Link>
                    <Link href=""><div className="flex gap-2 item-center"><LinkedinIcon/>linkedin</div></Link>
                    <Link href=""><div className="flex gap-2 items-center"><InstagramIcon/>instagram</div></Link>
                </div>
        </footer>
    )
}

export default Footer