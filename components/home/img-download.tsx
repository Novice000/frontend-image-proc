import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ImgDownload({
  imageURL,
  setImageURL,
}: {
  imageURL: string;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-10">
        <h2 className="text-3xl font-bold">Processed Image</h2>
        <Image src={imageURL} width={400} height={400} alt="processed image" />
        <Button
        className="w-full md:w-1/2"
        >
        <a
          href={imageURL}
          download
          className=" rounded-md text-white px-4 py-2 bg-black hover:bg-white hover:text-black hover:border-black hover:border"
          onClick={() => {
            setImageURL("");
          }}
        >
          Click to Download
        </a>
        </Button>
        <Button 
        className="w-full md:w-1/2 bg-black border-black text-white hover:border-blue-500 hover:scale-105"
        onClick={() => setImageURL("")}>Close</Button>
      </div>
    </>
  );
}
