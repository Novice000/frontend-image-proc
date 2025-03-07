;import React from "react";
import { div as Div } from "framer-motion/client";
import ImgForm from "@/components/home/img-form";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center pt-20 min-h-screen">
      <Div 
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ duration: 1 }}
      className="text-center w-full md:my-32 my-10">
        <h1 className="text-[50px] md:text-[100px] font-bold">Welcome to MyImageProc</h1>
        <p className="text-2xl md:text-4xl text-gray-400 md:mt-10 mt-5">Image compressor and background remover</p>
      </Div>
          <ImgForm />
    </main>
  );
}
