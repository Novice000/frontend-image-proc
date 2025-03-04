import { cards } from "@/store/card";
import FunctionalitiesCard from "@/components/home/functionalities-card";
import { div as Div } from "framer-motion/client";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center pt-20 min-h-screen">
      <Div 
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ duration: 1 }}
      className="text-center w-full md:my-32">
        <h1 className="text-3xl md:text-[100px] font-bold">Welcome to MyImageProc</h1>
        <p className="text-4xl text-gray-400 mt-10">Image compressor and background remover</p>
      </Div>
      <div className="grid grid-cols-1 flex-1 md:grid-cols-3 gap-5 mt-5 h-full w-full py-10 md:py-[150px] px-20 place-content-center bg-gray-200 rounded-lg shadow-md">
          {
              cards.map((card, index) => (
                  <FunctionalitiesCard key={index} card={card}/>
              ))
          }
      </div>
    </main>
  );
}
